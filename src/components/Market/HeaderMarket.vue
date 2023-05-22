<template>
    <header class="header__market">
        <ContainerFull>
        <LogoHeader />
        <!-- <div class="header_icons" > -->
            <div v-if="isOpen">
        <button @click="toggle" class="header_icons" >
            <svg class="header_icon" style="width: 30px">
                <use xlink:href="../../assets/symbol-defs.svg#icon-close"></use>
            </svg>
        </button>
            </div>
            <div v-else>
        <button @click="toggle" class="header_icons">
        <svg class="header_icon" style="width: 30px">
          <use xlink:href="../../assets/symbol-defs.svg#icon-menu"></use>
        </svg>
        </button>
        </div>
      <!-- </div> -->
      
        <div class="header_content" :class="{ active: isOpen }">
        <div class="left_nav">
            <nav>
            <ul class="left_nav_menu">
                <li><a href="#">Головна</a></li>
                <li><a href="#">Акції</a></li>
                <li><a href="#">Новини</a></li>
            </ul>
            </nav>
        </div>
        <div class="right_nav">
            <nav>
            <ul class="right_nav_menu">
                <li><a href="#">Контакти</a></li>
                <li><a href="#">Робота</a></li>
                
            </ul>
            </nav>
             </div>
        </div>
        </ContainerFull>
    </header>
</template>

<script>
import ContainerFull from '../Shared/ContainerFull.vue'
import LogoHeader from '../Shared/Logo.vue'
    export default {
        name:"HeaderMarket",
        components:{
            LogoHeader,
            ContainerFull
        },
        data(){
            return{
                isOpen: false
            }
        },
        methods:{
            toggle(){
                console.log(this.isOpen);
                this.isOpen = !this.isOpen
            }
        }

    }
</script>

<style lang="scss" scoped>
nav{
        display: flex;
        justify-content: center;
}

.header_icons{
    display: flex;
    position: absolute;
    right: 10px;
    top:10px;
    width: 40px;
    height: 40px;
    align-items: center;
    background-color: inherit;
    border: none;
    z-index: 16;
    .header_icon {
        fill: white;
    }
    @media(min-width: 768px){
        opacity: 0;
        display: none;
    }
}

.header__market {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: red;
  color: white;
  font-size: 36px;
}
.header_content {
    background-color: red;
    position: absolute;
    top: 0;
    left: -100%;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 15;
    @media(min-width: 768px){    
    background-color: inherit;
    position: static;
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: auto;
}}
.header_content.active {
        left: 0;
    }

.left_nav_menu {
    position: absolute;
    flex-direction: column;
    margin:0;
    padding:0;
    display:flex;

    @media (min-width: 768px) {
        flex-direction: column;
        left:100px;
        bottom: 50px;
    }
     @media (min-width: 1200px) {
        flex-direction: row;
        left: 150px;
    }
}

.right_nav_menu {
    position: absolute;
   
  margin:0;
  padding:0;
  display:flex;
  flex-direction: column;
     @media (min-width: 768px) {
        flex-direction: column;
        right: 100px;
        bottom: 50px;
    }
     @media (min-width: 1200px) {
        flex-direction: row;
         right: 150px;
    }
  
}

.left_nav_menu li{
  list-style:none;
  margin:0 20px;
  transition:0.5s;
}

.right_nav_menu li{
  list-style:none;
  margin:0 20px;
  transition:0.5s;
}

.left_nav_menu li a{
  display: block;
  position:relative;
  text-decoration:none;
  padding:5px;
  font-size:18px;
  font-family: sans-serif;
  color:#fff;
  text-transform:uppercase;
  transition:0.5s;
}

.right_nav_menu li a{
  display: block;
  position:relative;
  text-decoration:none;
  padding:5px;
  font-size:18px;
  font-family: sans-serif;
  color:#fff;
  text-transform:uppercase;
  transition:0.5s;
}

ul:hover li a{
  transform:scale(1.5);
  opacity:0.2;
  filter: blur(5px);
}

.left_nav_menu li a:hover{
  transform:scale(2);
  opacity: 1;
  filter: blur(0);
  text-decoration:none;
  color:#e60404;
}

.right_nav_menu li a:hover{
  transform:scale(2);
  opacity: 1;
  filter: blur(0);
  text-decoration:none;
  color:#e60404;
}

.left_nav_menu li a:before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:#fff;
  transition:0.5s;
  transform-origin:right;
  transform:scaleX(0);
  z-index:-1;
}

.right_nav_menu li a:before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:#fff;
  transition:0.5s;
  transform-origin:right;
  transform:scaleX(0);
  z-index:-1;
}

.left_nav_menu li a:hover:before{
  transition:transform 0.5s;
  transform-origin:left;
  transform:scaleX(1);
}

.right_nav_menu li a:hover:before{
  transition:transform 0.5s;
  transform-origin:left;
  transform:scaleX(1);
}
.header_burgermenu{
    display: flex;

}
</style>

