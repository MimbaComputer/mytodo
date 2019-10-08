<template>
   <div id="app-header">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand><router-link :to="`/${$i18n.locale}/AllTodo`" exact>{{$t('header.appName')}}</router-link></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item><router-link :to="`/${$i18n.locale}/AllTodo`" exact>{{$t('header.allTodo')}}</router-link></b-nav-item>
                    <b-nav-item><router-link :to="`/${$i18n.locale}/Todo`" exact>{{$t('header.todo')}}</router-link></b-nav-item>
                    <b-nav-item><router-link :to="`/${$i18n.locale}/Done`" exact>{{$t('header.done')}}</router-link></b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-button size="sm" class="my-2 my-sm-0 button" v-show="doneTodo" @click.prevent="deleteAllDone">{{$t('header.deleteAllDone')}}</b-button>
                    
                    <b-nav-item-dropdown :text="`${$i18n.locale}`" right>
                        <template v-slot:button-content>
                        <img :src="`${baseUrl}${$i18n.locale}.png`" alt="english flag"/>
                    </template>
                    <b-dropdown-item @click.prevent="setLocale('en')"><img :src="`${baseUrl}/en.png`"/>English </b-dropdown-item>
                    <b-dropdown-item @click.prevent="setLocale('fr')"><img :src="`${baseUrl}/fr.png`"/>Français</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template v-slot:button-content>
                        <em class="util">{{$t('header.user')}}</em>
                    </template>
                    <b-dropdown-item href="#">{{$t('user.profile')}}</b-dropdown-item>
                    <b-dropdown-item href="#">{{$t('user.signOut')}}</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import i18n from '../i18n'
export default {
    methods: {
        deleteAllDone: function(){
            this.$store.commit('deleteAllDone');
        },
        setLocale: function(locale){
            this.$i18n.locale=locale;
            this.$router.push({
                params: {
                    lang: locale
                }
            })
        }
    },
    computed:{
        doneTodo(){
        return this.$store.getters.doneTodo;
        },
        baseUrl(){
            return this.$store.state.baseUrl;
        }
    
    }
}
</script>

<style scoped>
   a{
    color: #fff;
    text-decoration: none;
    padding: 6px  8px;
    font-weight: bold;
  }
  .button{
  border-radius: 5px;
  background: #35495e;
  color: #fff;
}
.util{
   color: #fff; 
   font-weight: bold;
}
</style>
