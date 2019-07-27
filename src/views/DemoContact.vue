<template>
  <div class="home">
    <!-- 联系人列表 -->
    <van-contact-list
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
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

import { ContactList, ContactEdit,Popup } from 'vant';
export default {
  name: "home",
  components: {
    [ContactList.name]:ContactList,
    [ContactEdit.name]:ContactEdit,
    [Popup.name]:Popup
  },
  data(){
    return {
      editingContact: {},
      showEdit: false,
      isEdit: false,
      list: [{
        name: '张三',
        tel: '13000000000',
        id: 0
      }]
    }
  },
  created() {
  },
  methods: {
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
    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      if (this.isEdit) {
        this.list = this.list.map(item => item.id === info.id ? info : item);
      } else {
        this.list.push(info);
      }
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
    }
  }
};
</script>
<style scoped>
  .van-contact-list__add{
    z-index: 0;
  }
  .van-popup{
    height: 100%;
  }
</style>

