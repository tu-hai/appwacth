<?php
    include './session.php';

?>

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
                    <?php include './templates/nav.php'  ?>
                    <!-- cuoi cung nav  -->

                    <!-- bat dau content -->
                    <!-- home.php -->
                    <?php
                        include './session.php';
                        function build_calendar($month, $year) {

                            $firstDayOfMonth = mktime(0,0,0,$month,1,$year);
                        
                            $dateComponents = getdate($firstDayOfMonth);
                        
                        
                            $monthName = $dateComponents['month'];
                        
                            $datetoday = date('Y-m-d');
                            $calendar = "<table class='table table-bordered'>";
                            $calendar .= "<center><h2>$monthName $year</h2>";
                            $calendar.= "<a class='btn btn-xs btn-primary' href='?month=".date('m', mktime(0, 0, 0, $month-1, 1, $year))."&year=".date('Y', mktime(0, 0, 0, $month-1, 1, $year))."'>Previous Month</a> ";
                            
                            $calendar.= " <a href='chitiethoadon.php' class='btn btn-xs btn-primary' data-month='".date('m')."' data-year='".date('Y')."'>Current Month</a> ";
                            
                            $calendar.= "<a href='?month=".date('m', mktime(0, 0, 0, $month+1, 1, $year))."&year=".date('Y', mktime(0, 0, 0, $month+1, 1, $year))."' class='btn btn-xs btn-primary'>Next Month</a></center><br>";
                            
                            $calendar .= "</table>";
                        
                            echo $calendar;
                        }

                    ?>
                    <div class="pcoded-content">
                        <!-- Page-header start -->
<?php include './templates/tabnav.php'; ?>
                        <!-- Page-header end -->
                        <div class="pcoded-inner-content">
                            <!-- Main-body start -->
                            <div class="main-body">
                                <div class="page-wrapper">
                                    <!-- Page-body start -->
                                    <div class="page-body">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="row justify-content-center">
                                                    <div class="col-sm-6">
                                                        <?php 
                                                            $dateComponents = getdate();
                                                            if(isset($_GET['month']) && isset($_GET['year'])){
                                                                $month = $_GET['month'];                 
                                                                $year = $_GET['year'];
                                                            }else{
                                                                $month = $dateComponents['mon'];                 
                                                                $year = $dateComponents['year'];
                                                            }
                                                            echo build_calendar($month,$year);

                                                            $mysqli = new mysqli('localhost', 'root', '', 'hotel');
                                                            $sqlprice = "SELECT YEAR(created), MONTH(created) as month, name, gmail, idCardNumber, idCardType, address, phone
                                                            from users WHERE  MONTH(created) = $month AND YEAR(created) = $year";                                           
                                                           
                                                        ?>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <!-- task, page, download counter  start -->
                                            <div class="col-sm-12">
                                                <button type="button" id="btnExport" value="Export" onclick="Export()" class="btn btn-info">Xuất</button>
                                                <table class="table" id="tblCustomers">
                                                    <tr>
                                                        <th>Họ Tên</th>
                                                        <th>Gmail</th>
                                                        <th>ID Card</th>
                                                        <th>Kiểu Card</th>
                                                        <th>Địa Chỉ</th>
                                                        <th>Phone</th>
                                                    </tr>
                                                    <?php
                                                        $queryprice = $mysqli->query($sqlprice);
                                                        if($queryprice->num_rows > 0){
                                                            while ($row = $queryprice->fetch_assoc()) {
                                                               
                                                                echo "<tr>
                                        <td>{$row['name']}</td>
                                        <td>{$row['gmail']}</td>
                                        <td>{$row['idCardNumber']}</td>
                                        <td>{$row['idCardType']}</td>
                                        <td>{$row['address']}</td>
                                        <td>{$row['phone']}</td>";
                                                            }
                                                        }
                                                    ?>
                                                    <tr >
                                                        <td colspan="2"><b class="text-danger">Tổng : </b></td>
                                                        <td><b class="text-danger">
                                                        <?php 
                                                             $sqluser = "select count(*) as countuser from users
                                                            where month(created) = $month 
                                                            and year(created) = $year";
                                                            $queryusers = $conn->query($sqluser);
                                                            $rowuser = mysqli_fetch_array($queryusers);
                                                            echo $rowuser['countuser'];
                                                         ?>
                                                         </b>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- cuoi cung content -->
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
            <script src="//cdn.rawgit.com/rainabba/jquery-table2excel/1.1.0/dist/jquery.table2excel.min.js"></script>
    <script type="text/javascript">
        function Export() {
            $("#tblCustomers").table2excel({
                filename: "ChiTietNguoiDung.xls"
            });
        }
    </script>
</body>

</html>