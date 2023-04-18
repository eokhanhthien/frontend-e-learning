<template>
  <div class="Footer">
    <div class="container-xl pt-4 pb-4">
    <div class="row">
        <div class="col-3 border-footer">
            <!-- <div><img src="../.././../assets/images/logofooter.png" alt=""></div> -->
            <h2 class="footer-title">ĐỊA CHỈ</h2>
            <div class="footer-text"><i class="fa-solid fa-location-dot"></i> Khu 2, Đ. 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. CT</div>
            <div class="footer-text"><i class="fa-solid fa-phone"></i> ĐT: +84292 3832 663</div>
            <div class="footer-text"><i class="fa-solid fa-fax"></i> Fax: +84292 3838 474</div>
            <div class="footer-text"><i class="fa-solid fa-envelope"></i> dhct@ctu.edu.vn</div>
            <div class="footer-text"><a  title="facebook" class="icon-footer" href="https://www.facebook.com/CTUDHCT/"> <i class="fa-brands fa-facebook "></i></a>  <a title="youtube" class="icon-footer" href="https://www.youtube.com/ctudhct"><i class="fa-brands fa-youtube "></i></a>  <a title="instagram" class="icon-footer" href="https://www.instagram.com/ctudhct/"><i class="fa-brands fa-square-instagram "></i></a>  <a title="tiktok" class="icon-footer" href="https://www.tiktok.com/@ctudhct"><i class="fa-brands fa-tiktok "></i></a></div>
        </div>
        <div class="col-3 border-footer">
            <h2 class="footer-title">DỊCH VỤ TIỆN ÍCH</h2>
            <div class="footer-text">Thư điện tử</div>
            <div class="footer-text">Hệ thống tích hợp</div>
            <div class="footer-text">Học trực tuyến</div>
            <div class="footer-text">Thi trực tuyến</div>
            <div class="footer-text">Văn phòng điện tử</div>
            <div class="footer-text">Trợ giúp</div>

        </div>
        <div class="col-3 border-footer">
            <h2 class="footer-title">THÔNG TIN</h2>
            <div class="footer-text">Thông tin phòng, chống COVID</div>
            <div class="footer-text">Sự kiện</div>
            <div class="footer-text">Lịch trường</div>
            <div class="footer-text">Các số máy đặc biệt</div>
            <div class="footer-text">CTU 55 năm</div>
            <div class="footer-text">CTU News</div>
        </div>
        <div class="col-3">
            <h2 class="footer-title">CÔNG KHAI</h2>
            <div class="footer-text">Thông tư 36</div>
            <div class="footer-text">Tuyển dụng</div>
            <div class="footer-text">Tra cứu văn bằng</div>
            <div class="footer-text">Quy trình công tác</div>
            <div class="footer-text">Báo cáo thường niên</div>
            <div class="footer-text">Đề án mở ngành</div>
        </div>
    </div>
</div>
  </div>
</template>

<script setup>

</script>

<style>
.Footer{
    height: 400px;
    background-color: #2d4569;
    overflow: hidden;
}
.footer-text {
    color: white;
    margin: 22px 0;
}
.footer-text a {
    color: white;
    margin: 22px 0;
    font-size: 32px;
    margin-right: 10px;
}
.icon-footer:hover{
    color: rgb(199, 209, 236);
}
.border-footer{
    border-right: 1px solid #868686 ;
}
.footer-title {
    font-weight: 600;
    color: white;
    font-size: 20px;
}
</style>