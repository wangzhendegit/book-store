<template>
  <!--修改新增地址-->
  <div class="revise">
    <ul>
      <li><p>姓名 :<input type="text" placeholder="请填写您的真实姓名"></p></li>
      <li><p>联系电话 : <input type="text" placeholder="请填写我们联系您的电话号码"></p></li>
      <li><p>邮政编码 : <input type="text" placeholder="请填写您所在地区的邮政编码"></p></li>
      <li>
        <form action="myform">
          <select>
            <option value="0">四川</option>
            <option value="1">广州</option>
            <option value="2">广西</option>
            <option value="3">浙江</option>
          </select>
          <select>
            <option value="0">成都市</option>
            <option value="1">德阳市</option>
            <option value="2">绵阳市</option>
            <option value="3">广元市</option>
          </select>
          <select>
            <option value="0">武侯区</option>
            <option value="1">高新区</option>
            <option value="2">双流区</option>
            <option value="3">新都区</option>
          </select>
        </form>
      </li>
      <li><p>详细地址 : <input type="text" placeholder="请填写详细的街道、楼栋、门牌号"></p></li>
    </ul>
    <div class="added">
      <button type="button"><p>确认新增</p></button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'address',
    data(){
      return{

      }
    }
  }
</script>
<style scoped lang="less">
  @import "../../common/styles/pay.less";
  @import "../../common/styles/cart";
</style>
