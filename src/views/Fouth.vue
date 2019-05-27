<template>
  <div>
    <h2>4-1 axios封装</h2>
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
export default {
  name: 'axios4-1',
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
      return id !== null ? this.list.filter(item => item.id === id)[0] : {
        name: '',
        tel: ''
      };
    }
  },

  methods: {
    // 获取联系人列表
    async getList() {
      let res = await this.$Http.contactService.getContactList()
      Toast.clear()
      if(res.data.code === 200){
        this.list = res.data.data
      }
    },

    // 添加联系人
    onAdd() {
      this.isEdit = false;
      this.showEdit = true;
      this.editingContact = {}
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
    async onSave(info) {
      this.showEdit = false;
      this.showList = false;
      
      if (this.isEdit) {
        // 编辑联系人
        console.log(info)
        let res = await this.$Http.contactService.editContact(
          info,
          false
        )
        Toast.clear()
        console.log(res)
        if(res.data.code === 200){
          this.chosenContactId = res.data.data.id;
          this.getList()
        }
      } else {
        // 新建联系人
        // application/json
        /* let res = await this.$Http.contactService.newContactJson(
          info,
          false
        )
        Toast.clear()
        console.log(res)
        if(res.data.code === 200){
          this.chosenContactId = res.data.data.id;
          this.getList()
        } */
        // multipart/form-data
        let res = await this.$Http.contactService.newContactForm(
          info,
          true
        )
        Toast.clear()
        console.log(res)
        if(res.data.code === 200){
          this.chosenContactId = res.data.data.id;
          this.getList()
        }
      }
    },

    // 删除联系人
    async onDelete(info) {
      this.showEdit = false;
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
      let res = await this.$Http.contactService.delContact(
        {
          id:info.id
        },
        false
      )
      Toast.clear()
      console.log(res)
      if(res.data.code === 200){
        Toast('删除成功')
        this.getList()
      }
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
