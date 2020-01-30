<template>
  <div>
    <el-row>
      <el-button type="text" @click="dialogVisible = true"
        >click to open the Dialog</el-button
      >

      <el-dialog
        title="Tips"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <span>This is a message</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </el-dialog>
    </el-row>
    <el-row>
      <el-button type="text" @click="dialogTableVisible = true"
        >open a Table nested Dialog</el-button
      >

      <el-dialog title="Shipping address" :visible.sync="dialogTableVisible">
        <el-table :data="gridData">
          <el-table-column
            property="date"
            label="Date"
            width="150"
          ></el-table-column>
          <el-table-column
            property="name"
            label="Name"
            width="200"
          ></el-table-column>
          <el-table-column property="address" label="Address"></el-table-column>
        </el-table>
      </el-dialog>
    </el-row>
    <el-row>
      <!-- Form -->
      <el-button type="text" @click="dialogFormVisible = true"
        >open a Form nested Dialog</el-button
      >

      <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="Promotion name" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Zones" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="Please select a zone">
              <el-option label="Zone No.1" value="shanghai"></el-option>
              <el-option label="Zone No.2" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >Confirm</el-button
          >
        </span>
      </el-dialog>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      gridData: [
        {
          date: "2016-05-02",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District"
        },
        {
          date: "2016-05-04",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District"
        },
        {
          date: "2016-05-01",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District"
        },
        {
          date: "2016-05-03",
          name: "John Smith",
          address: "No.1518,  Jinshajiang Road, Putuo District"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    handleClose() {
      this.$confirm("Are you sure to close this dialog?");
    }
  }
};
</script>
