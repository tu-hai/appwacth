<?php
	include './session.php';


	if (isset($_POST['query'])) {
		$search = mysqli_real_escape_string($conn, $_POST['query']);
		$sql = "SELECT * FROM user WHERE  name LIKE '%$search%' || Email LIKE '%$search%' || Address LIKE '%$search%' || Phone LIKE '%$search%' || idCardNumber LIKE '%$search%' ";
	}
    else{
		$sql = "SELECT * FROM user ORDER BY IDuser DESC";
	}
	$query = mysqli_query($conn, $sql);
	if (mysqli_num_rows($query) > 0) {
		echo "<table class='table'>
		
			<tr>
                <th>Họ Tên</th>
                <th>Email</th>
                <th>Địa Chỉ</th>
                <th>Số điện thoại</th>
			</tr>
		";
		while ($row = mysqli_fetch_assoc($query)) {
		echo "
			<tr>
                <td>{$row['Name']}</td>
                <td>{$row['Email']}</td>
                <td>{$row['Address']}</td>
                <td>{$row['Phone']}</td>
                <td>
                    <a href='deleteuser.php?id={$row['IDuser']}' class='btn btn-danger'>Xoá</a>
                </td>
			</tr>
			";
		}
	echo "</table>";
	}else{
		echo "<h5>Không có kết quả</h5>";
	}
	
?>