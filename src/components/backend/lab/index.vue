<template>
    <div>
          <div class="content">
              <div class="animated fadeIn">
                  <button class="btn-add btn btn-primary"> <router-link to ="/lab/add">Thêm bài học</router-link> </button>
                  <div class="orders">
                      <div class="row">
                          <div class="col-xl-12">
                              <div class="card">
                                  <div class="card-body">
                                      <h4 class="box-title">Bài học  </h4>
                                  </div>
                                  <div class="card-body--">
                                      <div class="table-stats order-table ov-h">
                                          <table class="table ">
                                              <thead>
                                                  <tr>
                                                      <th class="serial">Bài số</th>
                                                      <!-- <th class="avatar">Hình ảnh</th> -->
                                                      <th>Tên bài học</th>
                                                      <th>Khóa học</th>
                                                      <!-- <th>Nội dung</th> -->
                                                      <!-- <th>Mô tả</th> -->
                                                      <th>Action</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <tr v-for="(course,index) in courses" v-bind:key="course._id">
                                                      <td class="serial">{{index+1}}</td>
                                                      <!-- <td class="avatar">
                                                          <div class="round-img">
                                                              <img :src="require('../../../assets/images/'+course.image )" aspect-ratio="2.75" >
  
                                                          </div>
                                                      </td> -->
                                                      <td> {{ course.name }} </td>
                                                      <td>  <span class="name">{{ course.name_course }}</span> </td>
                                                      <!-- <td> <span class="product">{{ course.content }}</span> </td> -->
                                                      <!-- <td><span class="count">{{ course.description }}</span></td> -->
                                                      <td>
                                                          <span class="badge badge-warning"><router-link :to="'lab/edit/' + course._id">Edit</router-link> </span>
                                                          <span @click ="handleDeleteCourse(course._id)" class="badge badge-complete ml-3">Delete</span>
                                                      </td>
                                                  </tr>
                                                  
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                              </div> 
                          </div>  
  
                      </div>
                  </div>
              </div>
          </div>
       
      </div>
  
  </template>
  
  <script setup>
  import { ref, onMounted,inject } from 'vue'
  import labApi from '@/api/labApi';
  const toast = inject('toast');
  
  const courses = ref([]);
  onMounted(() => {
      (async function () {
          const res = await labApi.getAll();
          // console.log(res.data.data)
          courses.value = res.data.data;
          console.log(courses.value)
  
      })()
  })
  
  async function handleDeleteCourse(id){
      const res = await labApi.delete({id: id})
      if(res){
          // location.reload()
          const res = await labApi.getAll();
          courses.value = res.data.data;
          toast.error('Xóa ngôn ngữ thành công');
      }   
  
  }
  </script>
  
  <style>

  </style>