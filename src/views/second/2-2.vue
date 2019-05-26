<template>
  <div>
    <h2>2-2 axios请求方法及别名</h2>
    <!-- 联系人卡片 -->
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="showList = true"
    />

    <!-- 联系人列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-contact-list
        v-model="chosenContactId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </van-popup>

    <!-- 联系人编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
import { ContactCard, ContactList, ContactEdit,Popup, Toast } from 'vant'
import axios from 'axios'
// import qs from 'qs'
export default {
  name: 'axios2_2',
  components: {
    [ContactCard.name]: ContactCard,
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit,
    [Popup.name]: Popup,
  },
  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [{
        name: '张三',
        tel: '13000000000',
        id: 0
      }]
    };
  },
  created(){
    this.getList()
  },
  computed: {
    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },

  methods: {
    // 获取联系人列表
    getList() {
      let self = this
      axios.get('http://localhost:9000/api/contactList')
        .then(function (response) {
            if(response.data.code === 200){
              self.list = response.data.data
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    // 添加联系人
    onAdd() {
      this.isEdit = false;
      this.showEdit = true;
    },

    // 编辑联系人
    onEdit(item) {
      this.isEdit = true;      
      this.showEdit = true;
      this.editingContact = item;
    },

    // 选中联系人
    onSelect() {
      this.showList = false;
    },

    // 保存联系人
    onSave(info) {
      let self = this
      this.showEdit = false;
      this.showList = false;
      
      if (this.isEdit) {
        // 编辑联系人
        console.log(info)
        axios.put('http://localhost:9000/api/contact/edit',info)
          .then(function (response) {
            if(response.data.code === 200){
                self.chosenContactId = response.data.data.id;
                self.getList()
              }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        // 新建联系人
        // application/json
        /* axios.post('http://localhost:9000/api/contact/new/json',info)
          .then(function (response) {
            if(response.data.code === 200){
              self.chosenContactId = response.data.data.id;
              self.getList()
            }
          })
          .catch(function (error) {
              console.log(error);
          }); */

        // application/x-www-form-urlencoded
        /* axios.post('http://localhost:9000/api/contact/new/json',qs.stringify(info))
          .then(function (response) {
            if(response.data.code === 200){
              self.chosenContactId = response.data.data.id;
              self.getList()
            }
          })
          .catch(function (error) {
              console.log(error);
          }); */
        // multipart/form-data
        let data = new FormData();
        for (var key in info) {
          data.append(key, info[key])
        }
        axios.post('http://localhost:9000/api/contact/new/form',data)
          .then(function (response) {
              if(response.data.code === 200){
                self.chosenContactId = response.data.data.id;
                self.getList()
              }
          })
          .catch(function (error) {
              console.log(error);
          });
      }
    },

    // 删除联系人
    onDelete(info) {
      let self = this
      this.showEdit = false;
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
      axios.delete('http://localhost:9000/api/contact/'+info.id)
        .then(function (response) {
            if(response.data.code === 200){
              Toast('删除成功')
              self.getList()
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
  }
}
</script>
<style scoepd>
  .van-popup{
    width: 100%;
    height: 100%;
  }
</style>
