<?php
    include './session.php';
    //đếm đơn hàng
    $sqldh = "select count(*) as countdh from donhang";
    $querydh = $conn->query($sqldh);
    $rowdh = mysqli_fetch_array($querydh, MYSQLI_ASSOC);
    
    // đếm số lượng sản phẩm
    $sqlsp = "select count(*) as countsp from sanpham";
    $querysp = $conn->query($sqlsp);
    $rowsp = mysqli_fetch_array($querysp, MYSQLI_ASSOC);


    //đếm số lượng người dùng
    $sqluser = "select count(*) as countuser from user";
    $queryuser = $conn->query($sqluser);
    $rowuser = mysqli_fetch_array($queryuser);
?>
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
                        <!-- task, page, download counter  start -->
                        <div class="col-xl-3 col-md-6">
                            <div class="card">
                                <div class="card-block">
                                    <div class="row align-items-center">
                                        <div class="col-8">
                                            <h5 class="text-c-blue"><?php echo $rowdh['countdh'];  ?></h5>
                                            <h6 class="text-muted m-b-0">Đơn hàng</h6>
                                        </div>
                                        <div class="col-4 text-right">
                                        <i class="fas fa-align-justify"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer bg-c-blue">
                                    <div class="row align-items-center">
                                        <div class="col-9">
                                            <a href=""> <p class="text-white m-b-0"> xem chi tiết</p></a>
                                        </div>
                                        <div class="col-3 text-right">
                                            <!-- <i class="fa fa-line-chart text-white f-16"></i> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                            <div class="card">
                                <div class="card-block">
                                    <div class="row align-items-center">
                                        <div class="col-8">
                                            <h5 class="text-c-green"><?php echo $rowsp['countsp']; ?></h5>
                                            <h6 class="text-muted m-b-0">Sản phẩm</h6>
                                        </div>
                                        <div class="col-4 text-right">
                                        <i class="fa fa-line-chart text-white f-16"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer bg-c-green">
                                    <div class="row align-items-center">
                                        <div class="col-9">
                                            <p class="text-white m-b-0"></p>
                                        </div>
                                        <div class="col-3 text-right">
                                            <i class="fa fa-line-chart text-white f-16"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6">
                            <div class="card">
                                <div class="card-block">
                                    <div class="row align-items-center">
                                        <div class="col-8">
                                            <h5 class="text-c-red"><?php echo $rowuser['countuser'];  ?></h5>
                                            <h6 class="text-muted m-b-0">Người dùng </h6>
                                        </div>
                                        <div class="col-4 text-right">
                                    
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer bg-c-red">
                                    <div class="row align-items-center">
                                        <div class="col-9">
                                            <p class="text-white m-b-0"></p>
                                        </div>
                                        <div class="col-3 text-right">
                                            <i class="fa fa-line-chart text-white f-16"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                 
                        <!--  project and team member start -->
                        <div class="col-xl-8 col-md-12">
                            <div class="card table-card">
                                <div class="card-header">
                                    <h5>Người dùng mới</h5>
                                    <div class="card-header-right">
                                        <ul class="list-unstyled card-option">
                                            <li><i class="fa fa fa-wrench open-card-option"></i></li>
                                            <li><i class="fa fa-window-maximize full-card"></i></li>
                                            <li><i class="fa fa-minus minimize-card"></i></li>
                                            <li><i class="fa fa-refresh reload-card"></i></li>
                                            <li><i class="fa fa-trash close-card"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-block">
                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Tên</th>
                                                    <th>Địa chỉ</th>
                                                    <th>Số điện thoại</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <?php 
                                            $sql = "SELECT * FROM `user` ORDER BY `user`.`IDuser` DESC  LIMIT 3";
                                            $query = $conn->query($sql);

                                            if($query->num_rows > 0){

                                                while($row =  $query->fetch_assoc()){              
                                                        echo '
                                                        <tr>
                                                            <td>
                                                
                                                                    <div class="d-inline-block">
                                                                        <h6>'.$row['Name'].'</h6>
                                                                        <p class="text-muted m-b-0">'.$row['Email'].'</p>
                                                              
                                                                </div>
                                                            </td>
                                                            <td>'.$row['Address'].'</td>
                                                            <td>'.$row['Phone'].'</td>
                                                        </tr>
                                                        ';
                                                    
                                                }
                                            }

                                            ?>
                                                
                                            </tbody>
                                        </table>
                                        <div class="text-right m-r-20">
                                            <a href="user.php" class=" b-b-primary text-primary">Xem thêm</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8 col-md-12">
                            <div class="card table-card">
                                <div class="card-header">
                                    <h5>Sản phẩm mới </h5>
                                    <div class="card-header-right">
                                        <ul class="list-unstyled card-option">
                                            <li><i class="fa fa fa-wrench open-card-option"></i></li>
                                            <li><i class="fa fa-window-maximize full-card"></i></li>
                                            <li><i class="fa fa-minus minimize-card"></i></li>
                                            <li><i class="fa fa-refresh reload-card"></i></li>
                                            <li><i class="fa fa-trash close-card"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-block">
                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Tên sản phẩm</th>
                                                    <th>Giá </th>
                                                    <th>Loại</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <?php 
                                                        $sql = "SELECT * FROM `sanpham` ORDER BY `sanpham`.`ID` DESC  LIMIT 3";
                                                        $query = $conn->query($sql);
             
                                                         if($query->num_rows > 0){
             
                                                             while($row =  $query->fetch_assoc()){              
                                                                     echo '
                                                                     <tr>
                                                                         <td>
                                                             
                                                                                 <div class="d-inline-block">
                                                                                     <h6>'.$row['TenSanPham'].'</h6>
                                                                           
                                                                             </div>
                                                                         </td>
                                                                         <td>'.$row['Gia'].'</td>
                                                                         <td>'.$row['IDLoai'].'</td>
                                                                     </tr>
                                                                     ';
                                                                 
                                                             }
                                                         }

                                            ?>
                                                
                                            </tbody>
                                        </table>
                                        <div class="text-right m-r-20">
                                            <a href="sanpham.php" class=" b-b-primary text-primary">Xem thêm</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8 col-md-12">
                            <div class="card table-card">
                                <div class="card-header">
                                    <h5>Sản phẩm mới </h5>
                                    <div class="card-header-right">
                                        <ul class="list-unstyled card-option">
                                            <li><i class="fa fa fa-wrench open-card-option"></i></li>
                                            <li><i class="fa fa-window-maximize full-card"></i></li>
                                            <li><i class="fa fa-minus minimize-card"></i></li>
                                            <li><i class="fa fa-refresh reload-card"></i></li>
                                            <li><i class="fa fa-trash close-card"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-block">
                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Tên sản phẩm</th>
                                                    <th>Giá </th>
                                                    <th>Loại</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <?php 
                                                        $sql = "SELECT * FROM `sanpham` ORDER BY `sanpham`.`ID` DESC  LIMIT 3";
                                                        $query = $conn->query($sql);
             
                                                         if($query->num_rows > 0){
             
                                                             while($row =  $query->fetch_assoc()){              
                                                                     echo '
                                                                     <tr>
                                                                         <td>
                                                             
                                                                                 <div class="d-inline-block">
                                                                                     <h6>'.$row['TenSanPham'].'</h6>
                                                                           
                                                                             </div>
                                                                         </td>
                                                                         <td>'.$row['Gia'].'</td>
                                                                         <td>'.$row['IDloai'].'</td>
                                                                     </tr>
                                                                     ';
                                                                 
                                                             }
                                                         }

                                            ?>
                                                
                                            </tbody>
                                        </table>
                                        <div class="text-right m-r-20">
                                            <a href="sanpham.php" class=" b-b-primary text-primary">Xem thêm</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--  project and team member end -->
                    </div>
                </div>
                <!-- Page-body end -->
            </div>
            <div id="styleSelector"> </div>
        </div>
    </div>
</div>