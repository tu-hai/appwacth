<?php
    include './session.php';

    if(isset($_POST['submit'])){
        $tensanpham = $_POST['Tensanpham'];
        $gia = $_POST['Gia'];
        $hinhsp = $_POST['Hinhsp'];
        $motasp = $_POST['Motasp'];
        $idloai = $_POST['IDLoai'];


        $sql0 = "select ID from sanpham";
        $query0 = mysqli_query($conn, $sql0);
        if(mysqli_num_rows($query0) == 0){
            $id = 1;
        }elseif(mysqli_num_rows($query0) > 0){
            $sql1 = "select MAX(ID) as ID from sanpham";
            $query1 = mysqli_query($conn, $sql1);
            $row = mysqli_fetch_array($query1);
            $id = $row['ID'];
            $id = $id + 1;
        }

    }

?>
<!doctype html>
<html lang="en">
  <head>
    <title>Admin</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
<body>
    
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Admin</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">
    <!-- waves.css -->
    <link rel="stylesheet" href="assets/pages/waves/css/waves.min.css" type="text/css" media="all">
    <!-- Required Fremwork -->
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap/css/bootstrap.min.css">
    <!-- waves.css -->
    <link rel="stylesheet" href="assets/pages/waves/css/waves.min.css" type="text/css" media="all">
    <!-- themify icon -->
    <link rel="stylesheet" type="text/css" href="assets/icon/themify-icons/themify-icons.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" type="text/css" href="assets/icon/font-awesome/css/font-awesome.min.css">
    <!-- scrollbar.css -->
    <link rel="stylesheet" type="text/css" href="assets/css/jquery.mCustomScrollbar.css">
    <!-- am chart export.css -->
    <link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />
    <!-- Style.css -->
    <link rel="stylesheet" type="text/css" href="assets/css/css.css">

    <link rel="stylesheet" href="assets/plugins/summernote/summernote-bs4.min.css">
</head>

<body>
    <!-- Pre-loader start -->
    <div class="theme-loader">
        <div class="loader-track">
            <div class="preloader-wrapper">
                <div class="spinner-layer spinner-blue">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
                <div class="spinner-layer spinner-red">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>

                <div class="spinner-layer spinner-yellow">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>

                <div class="spinner-layer spinner-green">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Pre-loader end -->
    <div id="pcoded" class="pcoded">
        <div class="pcoded-overlay-box"></div>
        <div class="pcoded-container navbar-wrapper">
            <!-- bat dau menu -->
            <!-- menu.php -->
            
            <!-- cuoi cung menu -->

            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <!-- bat dau nav  -->
                    <!--  nav.php  -->
                    <?php include 'nav.php'  ?>
                    <!-- cuoi cung nav  -->

                    <!-- bat dau content -->
                    <!-- home.php -->
                    <div class="pcoded-content">
                        <!-- Page-header start -->
                        <?php include 'tabnav.php'; ?>
                        <!-- Page-header end -->
                        <div class="pcoded-inner-content">
                            <!-- Main-body start -->
                            <div class="main-body">
                                <div class="page-wrapper">
                                    <!-- Page-body start -->
                                    <div class="page-body">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <form action="" method="post" enctype="multipart/form-data" id="formsp">
                                                
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h5>Thêm sản phẩm</h5>
                                                        </div>
                                                        
                                                        <div class="card-block">
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label for="">Tên sản phẩm : </label>
                                                                        <input type="text" class="form-control" name="TenSanPham" id="TenSanPham"  placeholder="Nhập tên sản phẩm" required>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label for="">Giá : </label>
                                                                        <input type="text" class="form-control" name="Gia" id="Gia"  placeholder="Nhập giá sản phẩm" required>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label for="">Hình sản phẩm : </label>
                                                                        <input type="text" class="form-control" name="HinhSP" id="HinhSP"  placeholder="Nhập hình sản phẩm" required>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label for="">Mô tả sản phẩm : </label>
                                                                        <input type="text" class="form-control" name="MoTaSP" id="MoTaSP"  placeholder="Nhập mô tả sản phẩm" required>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <label for="">Loại : </label>
                                                                        <input type="text" class="form-control" name="IDloai" id="IDloai"  placeholder="Nhập loại sản phẩm" required>
                                                                    </div>
                                                                </div>
                                                            </div>
                  
                                                            </div>
                                                            <div class="col-sm-12">
                                                            <button type="submit" name="submit" class="btn btn-success" id="check">Thêm</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Required Jquery -->
    <script type="text/javascript" src="assets/js/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="assets/js/jquery-ui/jquery-ui.min.js "></script>
    <script type="text/javascript" src="assets/js/popper.js/popper.min.js"></script>
    <script type="text/javascript" src="assets/js/bootstrap/js/bootstrap.min.js "></script>
    <script type="text/javascript" src="assets/pages/widget/excanvas.js "></script>
    <!-- waves js -->
    <script src="assets/pages/waves/js/waves.min.js"></script>
    <!-- jquery slimscroll js -->
    <script type="text/javascript" src="assets/js/jquery-slimscroll/jquery.slimscroll.js "></script>
    <!-- modernizr js -->
    <script type="text/javascript" src="assets/js/modernizr/modernizr.js "></script>
    <!-- slimscroll js -->
    <script type="text/javascript" src="assets/js/SmoothScroll.js"></script>
    <script src="assets/js/jquery.mCustomScrollbar.concat.min.js "></script>
    <!-- Chart js -->
    <script type="text/javascript" src="assets/js/chart.js/Chart.js"></script>
    <!-- amchart js -->
    <script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
    <script src="assets/pages/widget/amchart/gauge.js"></script>
    <script src="assets/pages/widget/amchart/serial.js"></script>
    <script src="assets/pages/widget/amchart/light.js"></script>
    <script src="assets/pages/widget/amchart/pie.min.js"></script>
    <script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script>
    <!-- menu js -->
    <script src="assets/js/pcoded.min.js"></script>
    <script src="assets/js/vertical-layout.min.js "></script>
    <!-- custom js -->
    <script type="text/javascript" src="assets/pages/dashboard/custom-dashboard.js"></script>
    <script type="text/javascript" src="assets/js/scripthotel.js"></script>
    <script src="assets/plugins/summernote/summernote-bs4.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.min.js"></script>
    <script>
    $(function () {
        
        $('#compose-textarea').summernote();

    });
     $( "#formsp" ).validate();
     $(function () {
                $("#check").click(function () {
 
                    var tensanpham = $("#TenSanPham").val();
                    var gia = $("#Gia").val();
                    var hinhsp = $("#HinhSP").val();
                    var motasp = $("#MoTaSP").val();
                    var idloai = $("#IDLoai").val();
                 
                    if(tensanpham == ""){
                        alert("Tên không được để trống");
                        return false;
                    }
                    if(gia == ""){
                        alert("giá không được để trống");
                        return false;
                    }

                    if (hinhsp == "") {
                        alert("hình ảnh sản phẩm không được để trống");
                        return false;
                    }
                    if (motasp == "" ) {
                        alert("mô tả không được để trống");
                        return false;
                    }
                    if (idloai == "" ) {
                        // Chổ này mình sẽ cho chọn từ bảng danh mục
                        alert("loại sản phẫm không được để trống");
                        return false;
                    }

                });
      $('#name').keydown(function (e) {
                     if (e.shiftKey || e.ctrlKey || e.altKey) {
                        e.preventDefault();
                    } else {
                        var key = e.keyCode;
                        if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                            e.preventDefault();
                        }
                    }
                });
            });
     
    </script>
</body>

</html>