<div class="page-header">
                            <div class="page-block">
                                <div class="row align-items-center">
                                    <div class="col-md-8">
                                        <div class="page-header-title">
                                            <h5 class="m-b-10">Quản Lý</h5>
                                            <p class="m-b-0">Xin chào,  <b>
                                                <?php 
                                                $sql = "select * from admin where Email = '$email'";
                                                $query = $conn->query($sql);
                                                $row = mysqli_fetch_array($query);
                                                    echo $row['Email']; 
                                                ?>
                                                </b>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <ul class="breadcrumb-title">
                                            <!-- <li class="breadcrumb-item">
                                                <a href="home.php"> <i class="fa fa-home"></i> </a>
                                            </li>
                                            <li class="breadcrumb-item"><a href="home.php">Dashboard</a>
                                            </li> -->
                                            <li>
                                            <a class="nav-link dropdown-toggle link" data-toggle="dropdown">
                                            <img src="./assets/images/admin-avatar.png" />
                                            <span></span>Admin<i class="fa fa-angle-down m-l-5"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <a class="dropdown-item" href="login.php"><i class="fa fa-power-off"></i>Logout</a>
                                            </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
