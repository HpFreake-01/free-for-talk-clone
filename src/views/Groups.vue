<template>
    <div class="main-wrapper">
        <div></div>
        <div class="groups-wrapper">
            <div>
                <Header/>
                <div class="navbar-panel">
                    <div>
                        <button
                                type="button" class="create-btn" @click="showModal">+ Create a new group
                        </button>
                    </div>
                    <span class="privacy-policy__link">
                        <router-link to="/privacy-policy">Privacy Policy</router-link>
                    </span>
                    <div style="margin-left">
                        <button class="look-btn" @click="activeFirst">1x</button>
                        <button class="look-btn" @click="activeSecond">2x</button>
                        <button class="look-btn" @click="activeThird">3x</button>
                    </div>
                    <div class="wrap-mode__btn">
                        <button class="mode-btn" @click="activeFirst">Dark</button>
                        <button class="mode-btn" @click="activeSecond">Light</button>
                    </div>
                </div>
            </div>
            <v-select :options="categories"
                      @select="sortByCategories"
                      :selected="selected"
                      :length="groups"
            />
            <Window v-show="isModalVisible"
                    @close="closeModal"
                    @create-new-group="createNewGroup"
                    v-bind:quantityOfMembers="quantityOfMembers"
                    v-bind:selectLanguage="selectLanguage"
                    v-bind:selectLevelOftLanguage="selectLevelOftLanguage"
            />
            <GroupList
                    v-bind:groups="filteredGroups"
                    @activeFirst="activeFirst"
                    @activeSecond="activeSecond"
                    @activeThird="activeThird"
            />
        </div>
    </div>
</template>
<script>
    import Window from "../components/Window";
    import GroupList from "../components/GroupList";
    import vSelect from "../components/v-select";
    import Header from "../components/Header";

    export default {
        name: 'Groups',
        components: {
            Window, GroupList, vSelect, Header
        },
        data () {
            return {
                groups:[
                    {id:1, topic:'title one', quantity:1, language:'English', levelOfLanguage:'beginner'},
                    {id:2, topic:'title two', quantity:3, language:'Polish', levelOfLanguage:'beginner'},
                    {id:3, topic:'title three', quantity:2, language:'English', levelOfLanguage:'advance'},
                ],
                quantityOfMembers:[
                    {id:0, quantity: 'Unlimited'},
                    {id:2, quantity: 1},
                    {id:2, quantity: 2},
                    {id:3,quantity: 3},
                    {id:4, quantity: 4},
                    {id:5, quantity: 5},
                    {id:6, quantity: 6},
                    {id:7, quantity: 7},
                    {id:8, quantity: 8},
                    {id:9, quantity: 9},
                    {id:10, quantity: 10}
                ],
                selectLanguage:[
                    {language:'All', id:1},
                    {language:'English', id:2},
                    {language:'Vietnamese', id:3},
                    {language:'Arabic', id:4},
                    {language:'French', id:5},
                    {language:'Indonesian', id:6},
                    {language:'Japanese', id:7},
                    {language:'Turkish', id:8},
                    {language:'Nahuatl', id:9},
                    {language:'Javanese', id:10},
                    {language:'Chinese', id:11},
                    {language:'AkanTwi', id:12},
                    {language:'Spanish', id:13},
                    {language:'Bengali', id:14},
                    {language:'Hindi', id:15},
                    {language:'Persian', id:16},
                    {language:'Norwegian', id:17},
                    {language:'Zulu', id:18},
                    {language:'Zhuang', id:19},
                    {language:'Maltese', id:20},
                    {language:'Klingon', id:21},
                    {language:'Punjabi', id:22},
                    {language:'Amharic', id:23},
                    {language:'Lou', id:24},
                    {language:'Nepali', id:25},
                    {language:'Xhosa', id:26},
                    {language:'Tamil', id:27},
                    {language:'Malay', id:28},
                    {language:'Filipino', id:29}
                ],
                selectLevelOftLanguage:[
                    {id:1, level:'Any level'},
                    {id:2, level:'Beginner'},
                    {id:3, level:'Upper Beginner'},
                    {id:4, level:'Intermediate'},
                    {id:5, level:'Upper Intermediate'},
                    {id:6, level:'Advanced'},
                    {id:7, level:'Upper Advanced'}
                ],
                isModalVisible: false,
                categories: [
                    {language:'All', index:1},
                    {language:'English', index:2},
                    {language:'Vietnamese', index:3},
                    {language:'Arabic', index:4},
                    {language:'French', index:5},
                    {language:'Indonesian', index:6},
                    {language:'Japanese', index:7},
                    {language:'Turkish', index:8},
                    {language:'Nahuatl', index:9},
                    {language:'Japanese', index:10},
                    {language:'Chinese', index:11},
                    {language:'AkanTwi', index:12},
                    {language:'Spanish', index:13},
                    {language:'Bengali', index:14},
                    {language:'Hindi', index:15},
                    {language:'Persian', index:16},
                    {language:'Norwegian', index:17},
                    {language:'Zulu', index:18},
                    {language:'Zhuang', index:19},
                    {language:'Maltese', index:20},
                    {language:'Klingon', index:21},
                    {language:'Punjabi', index:22},
                    {language:'Amharic', index:23},
                    {language:'Lou', index:24},
                    {language:'Nepali', index:25},
                    {language:'Xhosa', index:26},
                    {language:'Tamil', index:27},
                    {language:'Malay', index:28},
                    {language:'Filipino', index:29},
                ],
                selected:'all',
                sortedGroups:[],
                isActive1: true,
                isActive2: false,
                isActive3: false
            }
        },
        computed: {
            filteredGroups(){
                if (this.sortedGroups.length){
                    return this.sortedGroups
                } else {
                    return this.groups
                }
            }
        },
        methods: {
            activeFirst(){
                console.log('dlkfjlasfj')
            },
            activeSecond(){
            },
            activeThird() {
            },
            showModal() {
                this.isModalVisible = true
            },
            closeModal() {
                this.isModalVisible = false
            },
            createNewGroup(group){
                this.groups.push(group);
            },
            sortByCategories(category){
                this.sortedGroups = []
                let vm = this;
                this.groups.map(function (item) {
                    if (item.language === category.language){
                        vm.sortedGroups.push(item)
                    }
                })
            }
        }
    }

</script>

<style>
    .main-wrapper{
        display: grid;
        grid-template-columns:1fr 1160px 1fr;
    }
    @media screen and (max-width: 1100px) {
        .main-wrapper{
            display: grid;
            grid-template-columns:30px 1fr 30px;
        }
        .look-btn{
            display: none;
        }
        .navbar-panel{
            display:block;
        }

    }
    .groups-wrapper{
        padding-bottom: 40px;
    }
    .navbar-panel{
        padding-top: 20px;
        display: flex;
    }
    .create-btn{
        width: 175px;
        height: 32px;
        border-radius: 5px;
        border: none;
        color: #FFFFFF;
        background-color: #1890FF;
        font-size: 1em;
        outline: none;
    }
    .privacy-policy__link{
        background-color: #1E272D;
        color: #FFFFFF;
        border-radius:5px;
        margin-left: 5px;
        text-align: center;
        padding: 4px;
        height: 32px;
        width: 136px;
    }
    .privacy-policy__link a{
        text-decoration: none;
        color: #FFFFFF;
        font-size: 1em;
    }
    .wrap-mode__btn{
        margin-left:8px;
        display: flex;
    }
    .mode-btn:first-child{
        border-left: 1px solid #1c61af;
        border-radius: 4px 0 0 4px;
    }
    .mode-btn{
        height: 32px;
        outline: none;
        border-color: #1890ff;
        box-shadow: none!important;
        color: #D3D3D3;
        font-size: 13px;
        background: #1e272d;
        border-radius:0 4px 4px 0;
        padding: 3px 15px 3px 15px;
    }
    .mode-btn:active{
        color: #1c61af;
    }
    .look-btn{
        height: 32px;
        outline: none;
        border-color: #1890ff;
        box-shadow: none!important;
        color: #D3D3D3;
        font-size: 13px;
        background: #1e272d;
        padding: 3px 15px 3px 15px;
    }
    .look-btn:first-child{
        border-left: 1px solid #1c61af;
        border-radius: 4px 0 0 4px;
    }
    .look-btn:last-child{
        border-left: 1px solid #1c61af;
        border-radius:0 4px 4px 0;
    }
</style>