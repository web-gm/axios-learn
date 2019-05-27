const contactApi = {
  // 获取联系人列表
  getContactList: {
    method: 'get',
    url: 'contactList'
  },
  // 新建联系人 json
  newContactJson: {
    method: 'post',
    url: 'contact/new/json'
  },
  // 新建联系人 form
  newContactForm: {
    method: 'post',
    url: 'contact/new/form'
  },
  // 编辑联系人
  editContact: {
    method: 'put',
    url: 'contact/edit'
  },
  // 删除联系人
  delContact: {
    method: 'delete',
    url: 'contact'
  },
}
export default contactApi
