<template>
  <el-aside style="background-color: rgb(238, 241, 246)">
    <main-toolbar class="main-menu-toolbar"></main-toolbar>
    <el-menu :default-active="$route.path"
             router
             :default-openeds="['1','2','3']"
             :collapse="false"
    >
      <el-sub-menu index="1" v-show="isValid(['user'])">
        <template #title>
          <el-icon>
            <icon-menu/>
          </el-icon>
          实验平台
        </template>
        <el-menu-item index="/main/topoMain" >拓扑编辑</el-menu-item>
        <el-menu-item index="/main/datasets">Dataset List</el-menu-item>
        <el-menu-item index="/main/models">Model List</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="2" v-show="isValid(['manager'])">
        <template #title>
          <el-icon>
            <list/>
          </el-icon>
          用户管理
        </template>
        <el-menu-item index="/main/modelTaskCreate">发起任务</el-menu-item>
        <el-menu-item index="/main/modelTaskList">任务查看</el-menu-item>
        <el-menu-item index="/main/modelTaskConfig" v-if="false">任务配置</el-menu-item>
      </el-sub-menu>
    </el-menu>

  </el-aside>
</template>

<script setup>
import {Menu as IconMenu, Odometer, Setting,List} from '@element-plus/icons-vue'
import MainToolbar from "./MainToolbar";
import {isValid} from "../utils/valid";
import {useStore} from '../pinia'
const store = useStore();

const MANAGER = 'manager'
const USER = 'user'

</script>

<style scoped>
.main-menu-toolbar {
  border-bottom: 1px #e6e6e6 solid;
  /*background: #e2e2e2;*/
}
.el-menu-item {
  /*padding-left: 50px !important;*/
}
</style>
