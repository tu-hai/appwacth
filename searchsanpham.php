<?php
    include './session.php';

    if (isset($_POST['query'])) {
		$search = mysqli_real_escape_string($conn, $_POST['query']);
		$sql = "SELECT * FROM sanpham WHERE TenSanPham LIKE '%$search%' || Gia LIKE '%$search%' || HínhP LIKE '%$search%' || MoTaSP LIKE '%$search%'|| IDLoai LIKE '%$search%' ";
	}
    else{
		$sql = "SELECT * FROM sanpham ORDER BY ID DESC";
	}
    $query = mysqli_query($conn, $sql);
	if (mysqli_num_rows($query) > 0) {
		echo "<table class='table'>
		
			<tr>
                <th>Tên sản phẩm</th>
                <th>Giá </th>
                <th>Hình sản phẩm</th>
                <th>Mô tả sản phẩm</th>
                <th>Loại</th>
			</tr>
		";
		while ($row = mysqli_fetch_assoc($query)) {
		echo "
			<tr>
                <td>{$row['TenSanPham']}</td>
                <td>{$row['Gia']}</td>
                <td>{$row['HinhSP']}</td>
                <td>{$row['MoTaSP']}</td>
                <td>{$row['IDLoai']}</td>
                <td>
                    <a href='deletesanpham.php?id={$row['ID']}' class='btn btn-danger'>Xoá</a>
                </td>
			</tr>
			";
		}
	echo "</table>";
	}else{
		echo "<h5>Không có kết quả</h5>";
	}

?>