<template>
  <div class="w-full flex flex-col justify-center mt-8 sm:mt-12 px-4 lg:px-12 xl:px-20 3xl:px-32">
    <p class="text-primary text-4xl sm:text-5xl">FAQ</p>
    <div class="w-full flex flex-col lg:flex-row items-start mt-4 mb-6 sm:mt-6 z-20">
      <!-- Dropdown FQA -->
      <div class="w-full lg:w-1/2 flex flex-col mr-0 lg:mr-28">

        <!-- FQA 1-->
        <base-dropdown class="my-1 sm:my-6" dropdownClass="mt-2" @opened="checkDataOpen">
          <div slot="toggle" class="w-full flex items-center justify-between">
            <p align="start" class="text-2xl font-normal text-quaternary my-2 thai"
              :class="{ 'text-primary': dropdown_data }">
              สารสกัด CBD ดียังไง?
            </p>

            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data,
              'transform rotate-0 duration-200': !dropdown_data,
            }" viewBox="0 0 233 168" width="30" color='#5E5F5F' class="mr-4" />

          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="w-11/12 text-xl font-light text-quaternary thai">สารสกัด CBD จากกัญชงและกัญชง
              ถือเป็นส่วนผสมที่มีประโยชน์อย่างมากในด้านสกินแคร์
              เพราะมีคุณสมบัติแก้ปัญหาความงามได้อย่างครบจบในส่วนผสมเดียว <br> <br>
              -ลดสิว โดยควบคุมการทำงานของต่อมไขมัน ขับน้ำมันส่วนเกินที่เป็นสาเหตุของการเกิดสิว <br>
              -ลดการอักเสบและปลอบประโลมผิว ช่วยลดอาการบวม ปวด รอยแดงและอาการระคายเคืองของผิว จากสิวและโรคผิวหนังอื่น<br>
              -เพิ่มความชุ่มชื้น ด้วยวิตามิน A,D,E ที่ช่วยฟื้นบำรุงผิว โดยไม่ก่อให้เกิดการอุดตัน <br>
              -ลดริ้วรอย ด้วยสารต้านอนุมูลอิสระ ที่ช่วยชะลอวัย ให้ใบหน้าอ่อนเยาว์ เรียบเนียน <br>
              -ผ่อนคลายผิวตึงเครียด จากการเผชิญมลภาวะ <br> <br>

              เหมาะกับทุกสภาพผิว ไม่ว่าจะผิวมัน ผิวแห้งหรือผิวแพ้ง่าย </p>
          </base-dropdown-item>
        </base-dropdown>
        <hr class="w-full border-b border-gray-300">

        <!-- FAQ 2-->
        <base-dropdown class="my-1 sm:my-6" dropdownClass="mt-2" @opened="checkDataOpen2">
          <div slot="toggle" class="w-full flex items-center justify-between">
            <p align="start" class="text-2xl font-normal text-quaternary my-2 thai"
              :class="{ 'text-primary': dropdown_data2 }">
              ทำไมต้องเป็น Snowbell จากประเทศเกาหลี
            </p>

            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data2,
              'transform rotate-0 duration-200': !dropdown_data2,
            }" viewBox="0 0 233 168" width="30" color='#5E5F5F' class="mr-4" />

          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="w-11/12 text-xl font-light text-quaternary thai">เพราะสารสกัดดอก Snowbell ประเทศเกาหลี
              มีประโยชน์ต่อการดูแลผิว ด้วยคุณสมบัติ <br>
              -กำจัดสิ่งสกปรกที่ตกค้างบนผิวได้อย่างสะอาดหมดจด ลดปัญหาผิว อาทิ การอุดตันและสิว <br>
              -ลดการสร้างเมลานินหรือเม็ดสีบนผิว ทำให้ผิวกระจ่างใสอย่างธรรมชาติ <br>
              -ต้านการอักเสบของผิว <br>
              -ต้านแบคทีเรีย <br>
              -ลดการเกิดริ้วรอย ลดเลือนฝ้า กระ และจุดด่างดำ ด้วยสารต้านอนุมูลอิสระ <br>
              -ช่วยให้ผิวแข็งแรง สุขภาพดี จบปัญหาผิวแพ้ง่าย<br><br>
              Snowbell เกาหลี จดลิขสิทธิ์แก่ Panacee เพียงเจ้าเดียวในประเทศไทยเท่านั้น</p>
          </base-dropdown-item>
        </base-dropdown>
        <hr class="w-full border-b border-gray-300">

        <!-- FAQ 3 -->
        <base-dropdown class="my-1 sm:my-6" dropdownClass="mt-2" @opened="checkDataOpen3">
          <div slot="toggle" class="w-full flex items-center justify-between">
            <p align="start" class="text-2xl font-normal text-quaternary my-2 thai"
              :class="{ 'text-primary': dropdown_data3 }">
              Skin barrier คืออะไร ผิวแข็งแรงสำคัญยังไง
            </p>

            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data3,
              'transform rotate-0 duration-200': !dropdown_data3,
            }" viewBox="0 0 233 168" width="30" color='#5E5F5F' class="mr-4" />

          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="w-11/12 text-xl font-light text-quaternary thai">Skin barrier หรือเกราะป้องกันผิว
              คือเซลล์ชั้นบนสุดของผิว เปรียบเสมือนกำแพงที่ถ้าหากอ่อนแอ ก็จะทำให้สิ่งสกปรกและ
              มลภาวะสามารถแทรกซึมเข้าไปได้ง่าย ตามมาด้วยปัญหาผิวอย่าง การอักเสบ ระคายเคือง สิว ผด เป็นต้น <br> <br>

              ดังนั้นผิวที่ดีไม่มีปัญหา จึงต้องเกิดจากรากฐานของผิวแข็งแรง สุขภาพดี <br>
              การดูแลให้เกราะป้องกันผิวแข็งแรงจึงสำคัญอย่างมาก <br><br>

              ฟื้นบำรุงเกราะป้องกันผิวให้แข็งแรงด้วย <br>
              Canabliss Guardian : Pre&Pro Biotic Balancing Essence <br>
              เอสเซนส์เนื้อบางเบา ที่อุดมไปด้วยคุณค่าจาก <br><br>

              ▫Pre&Pro Biotic จะช่วยปรับสมดุลให้ผิวที่พัง กลับมาสุขภาพดี ทำให้ปราการป้องกันผิวแข็งแรง <br>
              ▫️สามารถกำจัดแบคทีเรียและสิ่งสกปรกบนผิวออกได้อย่างมีประสิทธิภาพ <br>
              ▫️นาโนเซราไมด์ขนาดเล็ก ฟื้นบำรุงผิว ไปเสริมเกราะป้องกันผิวให้แข็งแรง <br>
              ▫️ไฮยาลูโรนิค 8 ชนิด ที่เพิ่มความชุ่มชื้นสู่ชั้นผิวอย่างล้ำลึก ให้ผิวอิ่มน้ำ นุ่มฟูยาวนาน <br><br>

              และยังมีส่วนประกอบของสารสกัด CBD จากกัญชง 🌿 <br><br>

              -ลดสิว ควบคุมการทำงานของต่อมไขมัน <br>
              -ลดการอักเสบ อาการบวม ปวด รอยแดงและอาการระคายเคืองของผิว <br>
              -เพิ่มความชุ่มชื้นโดยไม่ก่อให้เกิดการอุดตัน <br>
              -ลดริ้วรอย ฝ้า กระ และจุดด่างดำ <br>
              และดอก Snowbell ประเทศเกาหลี 🌸 <br>
              -ลดการสร้างเมลานินหรือเม็ดสีบนผิว ทำให้ผิวกระจ่างใสอย่างธรรมชาติ <br>
              -ทำความสะอาดผิวล้ำลึก <br>
              -ต้านแบคทีเรีย <br>
              -ช่วยให้ผิวแข็งแรง สุขภาพดี <br>
              ที่จดลิขสิทธิ์แก่ Panacee เพียงเจ้าเดียวในประเทศไทยเท่านั้น <br><br>

              Step แรกของการบำรุงผิวสวย เพราะทุกความงามเริ่มต้นจากผิวที่แข็งแรง</p>
          </base-dropdown-item>
        </base-dropdown>
        <hr class="w-full border-b border-gray-300">

        <!-- FAQ 4 -->
        <base-dropdown class="my-1 sm:my-6" dropdownClass="mt-2" @opened="checkDataOpen4">
          <div slot="toggle" class="w-full flex items-center justify-between">
            <p align="start" class="text-2xl font-normal text-quaternary my-2 thai"
              :class="{ 'text-primary': dropdown_data4 }">
              คนมีปัญหาสิว ผิวมัน ควรใช้ผลิตภัณฑ์ไหน
            </p>
            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data4,
              'transform rotate-0 duration-200': !dropdown_data4,
            }" viewBox="0 0 233 168" width="30" color='#5E5F5F' class="mr-4" />
          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="w-11/12 text-xl font-light text-quaternary thai">ปัญหาสิวและผิวมัน เกิดจากกลไกผลิตน้ำมันบนผิวหน้า
              ผลิตน้ำมันออกมามากเกินไป จนเกิดการอุดตันในรูขุมขน และอาจมีสาเหตุมาจากเกราะป้องกันผิวไม่แข็งแรง
              จนทำให้สิ่งสกปรกสามารถผ่านเข้าสู่ชั้นผิวและเกิดเป็นสิวได้ ดังนั้นการทำความสะอาดใบหน้าให้หมดจด
              สร้างภูมิคุ้มกันให้ชั้นผิวและบำรุง จึงสำคัญเป็นอย่างมาก โดยใช้ตัวช่วยดูแลผิวเหล่านี้ <br><br>

              ขั้นตอนที่ 1 <br>
              Canabliss Clear : Micellar Cleansing Gel <br>
              เจลล้างหน้าและเครื่องสำอางไมเซล่า <br>
              ทำความสะอาดล้ำลึก ดักจับสิ่งสกปรกและขจัดออกจากผิวอย่างล้ำลึกอ่อนโยน <br>
              เนื้อเจลนุ่มลื่น ที่ช่วยถนอมใบหน้า ไม่ระคายเคืองผิวหนังรอบดวงตา ช่วยลดแบคทีเรียและความมัน <br><br>


              ขั้นตอนที่ 2 <br>
              Canabliss Guardian : Pre&Pro Biotic Balancing Essence <br>
              น้ำตบปรับสมดุลให้ผิวที่พัง กลับมาสุขภาพดี ที่มีส่วนผสมของ <br>
              -Pre&Pro Biotic ทำให้ปราการป้องกันผิวแข็งแรง สามารถกำจัดแบคทีเรียและสิ่งสกปรกบนผิวออกได้อย่างมีประสิทธิภาพ
              <br>
              -นาโนเซราไมด์ขนาดเล็ก ฟื้นบำรุงผิวให้แข็งแรง <br>
              -ไฮยาลูโรนิค 8 ชนิด ให้ผิวอิ่มน้ำ นุ่มฟูยาวนาน <br>
              -สารสกัด CBD จากกัญชง ลดสิว ควบคุมการทำงานของต่อมไขมัน บรรเทาอาการอักเสบและอาการระคายเคืองของผิว <br>
              -ดอก Snowbell ประเทศเกาหลี ลดการสร้างเมลานินหรือเม็ดสีบนผิว ทำให้ผิวกระจ่างใสอย่างธรรมชาติ
              ทำความสะอาดผิวล้ำลึก <br> <br>

              ขั้นตอนที่ 3 <br>
              Canabliss Oasis Swiss Snow Overnight Mask <br>
              ด้วยส่วนผสมของสารสกัดจากน้ำแร่บริสุทธิ์ ธารน้ำแข็ง Swiss glacier water ในเทือกเขาแอลป์
              ประเทศสวิสเซอร์แลนด์ ที่ช่วยเพิ่มความชุ่มชื้น สดชื่นให้ผิวอย่างยาวนาน และฟื้นฟูผิวที่แห้งกร้าน ผสานสารสกัด
              CBD จากกัญ สารสกัดรากชะเอมเทศ และสารสกัดสาหร่ายสีแดง ช่วยให้ผิวแลดูขาวกระจ่างใสขึ้น
              ปรับสีผิวให้เรียบเนียนสม่ำเสมอ
            </p>
          </base-dropdown-item>
        </base-dropdown>
        <hr class="w-full border-b border-gray-300">

        <!-- FAQ 5 -->
        <base-dropdown class="my-1 sm:my-6" dropdownClass="mt-2" @opened="checkDataOpen5">
          <div slot="toggle" class="w-full flex items-center justify-between">
            <p align="start" class="text-2xl font-normal text-quaternary my-2 thai"
              :class="{ 'text-primary': dropdown_data5 }">
              คนผิวแห้งควรใช้ผลิตภัณฑ์ไหน
            </p>
            <base-icon icon="dropdown" :class="{
              'transform rotate-180 duration-200': dropdown_data5,
              'transform rotate-0 duration-200': !dropdown_data5,
            }" viewBox="0 0 233 168" width="30" color='#5E5F5F' class="mr-4" />
          </div>
          <!-- Details -->
          <base-dropdown-item>
            <p class="w-11/12 text-xl font-light text-quaternary thai">ปัญหาผิวแห้ง
              มีสาเหตุมาจากต่อมไขมันผลิตน้ำมันหล่อเลี้ยงผิวออกมาน้อยกว่าปกติ
              ทำให้ขาดตัวเคลือบผิวที่ปกป้องความชุ่มชื้นหายไป จนผิวแห้งและนำไปสู่การขาดความสมดุลของผิว
              และริ้วรอยก่อนวัยอันควร ดังนั้นการดูแลเพิ่มความชุ่มชื้นให้กับผิวจึงเป็นเรื่องที่สำคัญมาก <br><br>


              ขั้นตอนที่ 1 <br>
              Canabliss Clear : Micellar Cleansing Gel <br>
              เจลล้างหน้าและเครื่องสำอาง <br>
              ทำความสะอาดล้ำลึก ดักจับสิ่งสกปรกและขจัดออกจากผิวอย่างล้ำลึกอ่อนโยน <br>
              เนื้อเจลนุ่มลื่น ที่ช่วยถนอมใบหน้า ไม่ระคายเคืองผิวหนังรอบดวงตา ช่วยลดแบคทีเรียและความมัน <br><br>

              ขั้นตอนที่ 2 <br>
              Canabliss Oasiz : Super Berry Hydrating Mask <br>
              มาส์กแบบล้างออก เนื้อมาส์กพุดดิ้งเจลลี่ พสานพลัง super berry จากสารสกัดเบอร์รี่ทั้ง7 <br>
              ที่มีสารต้านอนุมูลอิสระผสานสารสกัด CBD จากกัญ ช่วยลดเลือนจุดด่างดำและริ้วรอย ชะลอวัย เผยผิวกระจ่างใส <br>
              ปลอบประโลมผิวและเพิ่มความชุ่มชื้นให้ใบหน้าอิ่มน้ำ เด้งฟู <br><br>

              ขั้นตอนที่ 3 <br>
              Canabliss Oasiz : First Step Amino Essence <br>
              น้ำตบหน้าเด้ง ชะลอริ้วรอย ผสานคุณค่าจาก <br>
              -Amino acids ที่เป็นอาหารผิวเสริมเกราะผิวให้แข็งแรง สร้างคอลลาเจนและอีลาสติน ทำให้ผิวหน้าอ่อนเยาว์ <br>
              กระชับเด้งเฟิร์ม สามารถกักเก็บความชุ่มชื้นไว้ได้นาน <br>
              -สารสกัด CBD จากกัญชง ลดสิว ควบคุมการทำงานของต่อมไขมัน บรรเทาอาการอักเสบและอาการระคายเคืองของผิว <br>
              ลดเรือนรอยริ้ว ฝ้า กระ จุดด่างดำ <br>
              -ดอก Snowbell ประเทศเกาหลี ลดการสร้างเมลานินหรือเม็ดสีบนผิว ทำให้ผิวกระจ่างใสอย่างธรรมชาติ <br><br>
              ทำความสะอาดผิวล้ำลึก <br>

              ขั้นตอนที่ 4 <br>
              Canabliss Crown : Cannabis Leaf Serum <br>
              เซรั่มชะลอวัย <br>
              ผสานคุณค่าจากทองคำบริสุทธิ์และ CBD ที่ช่วยชะลอการเกิดริ้วรอย <br>
              กระตุ้นการสร้างคอลลาเจนและเพิ่มความชั่มชื้นให้ผิวตึง กระชับ ยับยั้งการสร้างเม็ดสี ช่วยให้ฝ้า กระ จางลง
              <br><br>

              ขั้นตอนที่ 5 <br>
              Canabliss Guardian : Adnance Eye Cream Brown Algae Plus Caffeine <br>
              ครีมบำรุงผิวรอบดวงตา ผสานคุณค่าเปปไทด์ ที่ออกฤทธิ์คล้าย Botox ช่วยลดเลือนริ้วรอยใต้ตา ฟื้นบำรุงรอยคล้ำ
              <br>
              ด้วยคุณค่าจากสาหร่ายสีน้ำตาล และแคปซูลคาเฟอีน ช่วยเติมความชุ่มชื้นให้ผิวรอบดวงตา ด้วยคุณค่าจากไฮยาลูรอน
              <br>
              เซราไมด์และ CBD สารสกัดจากกัญ</p>
          </base-dropdown-item>
        </base-dropdown>
      </div>

      <!-- Picture-->
      <img src="~/static/images/IMG_03blogs/Path364@2x.png" class="widget364 z-10">
      <div class="w-full md:w-11/12 lg:w-1/2 mt-8 xl:mt-10 z-20">
        <img src="@/static/images/IMG_01home/pages_01home/enecta.jpg" class="rounded-3xl">
      </div>
    </div>
    <!-- <img src="~/static/images/IMG_03blogs/Path364@2x.png" class="widget364 z-10"> -->
    <img src="~/static/images/IMG_03ingredients/CANABLISS@2x.png" class="widgetc z-10">

    <div class="w-full my-0 mb-0 mt-24 md:mt-12 sm:my-20 flex flex-wrap justify-evenly text-quaternary">
      <div class="flex flex-col mx-4 sm:mx-0 items-center ">
        <img src="~/static/images/IMG_01home/24.png" class="mb-4">
        <p class="text-lg font-normal">24 Services</p>
        <p class="text-sm font-extralight">Consultations via email</p>
      </div>
      <div class="mt-8 sm:mt-0 flex flex-col mx-4 sm:mx-0 items-center ">
        <img src="~/static/images/IMG_01home/30D.png" class="mb-4">
        <p class="text-lg font-normal">30 Days Return</p>
        <p class="text-sm font-extralight">You have to 30 days to return</p>
      </div>
      <div class="mt-8 md:mt-0 flex flex-col mx-4 sm:mx-0 items-center ">
        <img src="~/static/images/IMG_01home/FD.png" class="mb-4">
        <p class="text-lg font-normal">Fast Delivery</p>
        <p class="text-sm font-extralight">On order above $ 50</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown_data: false,
      dropdown_data2: false,
      dropdown_data3: false,
      dropdown_data4: false,
      dropdown_data5: false,
    }
  },
  methods: {
    checkDataOpen(toggle) {
      // console.log(toggle)
      this.dropdown_data = toggle
    },
    checkDataOpen2(toggle) {
      this.dropdown_data2 = toggle
    },
    checkDataOpen3(toggle) {
      this.dropdown_data3 = toggle
    },
    checkDataOpen4(toggle) {
      this.dropdown_data4 = toggle
    },
    checkDataOpen5(toggle) {
      this.dropdown_data5 = toggle
    },
  }
}
</script>

<style scoped>
.widgetc {
  height: 7.5rem;
  position: absolute;
  right: 2.5rem;
  transform: translate(0rem, 3.5rem);
}

.widget364 {
  height: 20rem;
  position: absolute;
  right: 0;
  transform: translate(2.5rem, -5rem);
}

@media (max-width:600px) {
  .widgetc {
    height: 6rem;
    position: absolute;
    right: 2.5rem;
    transform: translate(1rem, 0rem);
  }
}
</style>