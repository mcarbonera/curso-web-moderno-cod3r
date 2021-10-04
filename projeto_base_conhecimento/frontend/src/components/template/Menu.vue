<template>
    <aside class="menu" v-show="isMenuVisible">
        <div class="menu-filter">
            <i class="fa fa-search fa-lg"></i>
            <input type="text" placeholder="Digite para filtrar..."
                v-model="treeFilter" class="filter-field">
        </div>
        <tree :data="treeData" :options="treeOptions"
            :filter="treeFilter" ref="tree" >
            <div class="node-container" slot-scope="{ node }">
                <div class="node-text">{{ node.text }}</div>
            </div>
        </tree>
    </aside>
</template>

<script>
import { mapState } from 'vuex'
import tree from 'liquor-tree'
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
    name: 'Menu',
    components: { tree },
    computed: mapState(['isMenuVisible']),
    data: function() {
        return {
            treeFilter: '',
            treeData: this.getTreeData(),
            treeOptions: {
                propertyNames: { 'text': 'name' },
                filter: { emptyText: 'Categoria não encontrada.' }
            }
        }
    },
    methods: {
        getTreeData() {
            const url = `${baseApiUrl}/categories/tree`
            return axios.get(url).then(res => res.data)
        },
        onNodeSelect(node) {
            this.$router.push({
                name: 'articlesByCategory',
                params: { id: node.id }
            })

            if(this.$mq === 'xs' || this.$mq === 'sm') {
                this.$store.commit('toggleMenu', false)
            }
        }
    },
    mounted() {
        this.$refs.tree.$on('node:selected', this.onNodeSelect)
    }
}
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    
    .menu ul li i.tree-arrow::after {
        border-color: rgb(57, 202, 20);
        filter: brightness(1);
    }

    .menu ul li div {
        color: rgb(57, 202, 20);
    }

    .menu .tree-node.selected > .tree-content {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .menu .tree-node:hover .tree-content:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .menu .menu-filter {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 20px;
        padding-bottom: 8px;
        border-bottom: 1px solid rgb(57, 202, 20);
    }

    .menu .menu-filter i {
        color: rgb(57, 202, 20);
        margin-right: 10px;
    }

    .menu input {
        color: rgb(57, 202, 20);
        font-size: 1.3rem;
        border: 0;
        outline: 0;
        width: 100%;
        background: transparent;
    }

    .tree-filter-empty {
        color: #CCC;
        font-size: 1.3rem;
        margin-left: 20px;
    }
</style>