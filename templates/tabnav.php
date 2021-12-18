<div class="page-header">
                            <div class="page-block">
                                <div class="row align-items-center">
                                    <div class="col-md-8">
                                        <div class="page-header-title">
                                            <h5 class="m-b-10">Quản Lý</h5>
                                            <p class="m-b-0">Xin chào,  <b>
                                                <?php 
                                                
                                                $sql = "select * from admin where email = '$gmail'";
                                                $query = $conn->query($sql);
                                                $row = mysqli_fetch_array($query);
                                                    echo $row['email']; 
                                                ?>
                                                </b>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <ul class="breadcrumb-title">
                                            <li class="breadcrumb-item">
                                                <a href="home.php"> <i class="fa fa-home"></i> </a>
                                            </li>
                                            <li class="breadcrumb-item"><a href="home.php">Dashboard</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>