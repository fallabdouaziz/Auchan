<template>
  <q-page padding>
    <!-- content -->
    <form enctype="multipart/form-data" @submit.prevent="uploadFile">
      <input type="file" ref="file" @change="selectedFile"/>
      <input type="file" ref="file2" @change="selectedFile2"/>
      <input type="submit" name="upload"/>
    </form>
  </q-page>
</template>

<script>
import axios from 'axios'
export default {
  // name: 'PageName',
  data () {
    return {
      file: '',
      file2: '',
      image: ''
    }
  },
  mounted () {
    axios.get('http://localhost:3000/file')
      .then(data => {
        this.image = data.data
      })
  },
  methods: {
    selectedFile () {
      this.file = this.$refs.file.files[0]
      console.log(this.file)
    },
    selectedFile2 () {
      this.file2 = this.$refs.file2.files[0]
      console.log(this.file2)
    },
    uploadFile () {
      const form = new FormData()
      form.append('file', this.file)
      form.append('file2', this.file2)
      console.log(form)
      axios.post('http://localhost:3000/file', form)
        .then(data => {
          console.log(data)
        }).catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
