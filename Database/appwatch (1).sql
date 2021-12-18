-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2021 at 11:24 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appwatch`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `ID` int(11) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`ID`, `Email`, `Pass`) VALUES
(1, 'Admin@gmail.com', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `chitietdonhang`
--

CREATE TABLE `chitietdonhang` (
  `IDchitet` int(11) NOT NULL,
  `IDdonhang` int(11) NOT NULL,
  `ID` int(11) NOT NULL,
  `Tensanpham` varchar(200) NOT NULL,
  `Giasp` int(11) NOT NULL,
  `Soluong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chitietdonhang`
--

INSERT INTO `chitietdonhang` (`IDchitet`, `IDdonhang`, `ID`, `Tensanpham`, `Giasp`, `Soluong`) VALUES
(1, 13, 14, 'Đồng hồ Casio LTP-E308L-4AVDF ', 2450000, 1),
(2, 14, 13, 'Đồng Hồ Casio Nữ LTP-VT01L-7B3UDF', 999000, 1),
(3, 15, 14, 'Đồng hồ Casio LTP-E308L-4AVDF ', 2450000, 1),
(4, 15, 6, 'Đồng hồ Casio Nam A168WGG-1BDF', 2800000, 2),
(5, 16, 14, 'Đồng hồ Casio LTP-E308L-4AVDF ', 2450000, 1),
(6, 17, 14, 'Đồng hồ Casio LTP-E308L-4AVDF ', 2450000, 1),
(7, 18, 14, 'Đồng hồ Casio LTP-E308L-4AVDF ', 2450000, 1),
(8, 19, 14, 'Đồng hồ Casio LTP-E308L-4AVDF ', 7350000, 3);

-- --------------------------------------------------------

--
-- Table structure for table `donhang`
--

CREATE TABLE `donhang` (
  `IDdonhang` int(11) NOT NULL,
  `Tenkhachhang` varchar(200) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `Diachi` varchar(200) NOT NULL,
  `Sodienthoai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `donhang`
--

INSERT INTO `donhang` (`IDdonhang`, `Tenkhachhang`, `Email`, `Diachi`, `Sodienthoai`) VALUES
(1, 'Lan', 'lan@gmail.com', 'Gia Lai', 9876877),
(2, 'bn', 'abcd@gmail.com', 'gl', 2143334223),
(3, 'bn', 'abcd@gmail.com', 'gl', 2143334223),
(4, 'bn', 'abcd@gmail.com', 'gl', 2143334223),
(5, 'bn123', 'abcd@gmail.com', 'gl', 2143334223),
(6, 'ww', 'abc@gmail.com', 'gl', 55455634),
(7, 'dac', 'abc@gmail.com', '1234567898', 1245563),
(8, 'nvt', 'nvt@gmail.com', 'abc', 1234532424),
(9, 'ad', 'ad@gmail.com', 'dn', 2147483647),
(10, 'ad', 'ad@gmail.com', 'dn', 2147483647),
(11, 'ad', 'ad@gmail.com', 'dn', 2147483647),
(12, 'fb', 'fb@gmail.com', 'dn', 1353221),
(13, 'dp', 'dp@gmail.com', 'gl', 123456789),
(14, 'dh', 'dha@gmail.com', 'dn', 12345532),
(15, 'kkk', 'kkk@gmail.com', 'gl', 987545),
(16, 'dem phuong', 'diemphuong@gmail.com', 'Gia Lai', 98372822),
(17, 'Nguyen Van A', 'vana@gmail.com', 'Da Nang', 988765578),
(18, 'Nguyen Van b', 'vanb@gmail.com', 'Gia Lai', 99847388),
(19, 'Nguyen Thi Lan', 'thilan@gmail.com', 'Da Nang', 9876738);

-- --------------------------------------------------------

--
-- Table structure for table `loaisanpham`
--

CREATE TABLE `loaisanpham` (
  `IDLoai` int(11) NOT NULL,
  `TenSP` varchar(100) NOT NULL,
  `HinhLoaiSP` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `loaisanpham`
--

INSERT INTO `loaisanpham` (`IDLoai`, `TenSP`, `HinhLoaiSP`) VALUES
(1, 'Đồng hồ nam', 'https://i0.wp.com/dongho.casiovietnam.net/wp-content/uploads/2016/11/MTP-V002GL-7BUDF.png?w=696&ssl=1'),
(2, 'Đồng hồ nữ', 'https://casiovietnam.net/upload/upload/images/bai-viet/ltp-2087l-4av-0.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `ID` int(10) NOT NULL,
  `TenSanPham` varchar(200) NOT NULL,
  `Gia` int(15) NOT NULL,
  `HinhSP` varchar(300) NOT NULL,
  `MoTaSP` varchar(400) NOT NULL,
  `IDLoai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`ID`, `TenSanPham`, `Gia`, `HinhSP`, `MoTaSP`, `IDLoai`) VALUES
(1, 'Đồng hồ Nam Casio GA-400GB-1A4DR', 4486000, 'https://donghodanang.com/wp-content/uploads/2019/09/GA-400GB-1A4DR.png', 'Vật liệu vỏ / vành bezel: Nhựa\r\nDây đeo bằng nhựa\r\nChống từ\r\nChống va đập\r\nMặt kính khoáng\r\nChống nước ở độ sâu 200 mét\r\nĐèn LED\r\nCông tắc đèn tự động, thời lượng chiếu sáng có thể lựa chọn (1,5 hoặc 3 giây), phát sáng sau\r\nGiờ thế giới\r\n31 múi giờ (48 thành phố + giờ phối hợp quốc tế), múi giờ UTC một lần chạm, bật/tắt tiết kiệm ánh sáng ban ngày, chuyển đổi Giờ địa phương/Giờ thế giới\r\nĐồng hồ ', 1),
(2, 'Đồng Hồ Casio Nữ BA-110-4A2DR ', 2800000, 'https://cdn.pnj.io/images/thumbnails/435/435/detailed/66/BA-110-4A2DR_Desktop_1.jpg', 'Thương hiệu:Casio\r\nGiới tính: Nữ\r\nPhong cách: Thời trang\r\nKích thước mặt: > 45mm\r\nXuất Xứ Thương Hiệu: Nhật Bản\r\nXuất xứ bộ máy: Nhật Bản\r\nLắp ráp tại: Trung Quốc\r\nLoại máy đồng hồ: Quart\r\nLoại mặt kính: Kính Khoáng Cứng\r\nChất liệu dây: Dây Cao Su\r\nChất liệu vỏ: Vỏ Thép Cao Cấp Không Gỉ 316L\r\nHình dạng mặt:Tròn\r\nĐộ chịu nước: 100m\r\nSố Kim: 2 Kim \r\nĐá Gắn Kèm Đồng Hồ: Không gắn đá \r\nChứng nhận Chro', 2),
(3, 'Đồng hồ Nữ Casio B640WC-5ADF', 1200000, 'https://cdn.tgdd.vn/Products/Images/7264/204603/dong-ho-nu-casio-b640wc-5adf-2-1-org.jpg', 'Đối tượng sử dụng: Nữ\r\nĐường kính mặt: 35 mm\r\nChất liệu mặt kính:Kính khoáng Mineral\r\nChất liệu dây: Hợp kim\r\nBộ máy: Pin (Quartz)\r\nChống nước: 5 ATM \r\nThương hiệu: Nhật Bản\r\nHãng CASIO.', 2),
(4, 'Đồng hồ Nam Casio EQS-800BCD-2AVUDF', 3900000, 'https://cdn.tgdd.vn/Products/Images/7264/237465/casio-eqs-800bcd-2avudf-nam-1-org.jpg', 'Đối tượng sử dụng: Nam\r\nĐường kính mặt: 47.5 mm\r\nChất liệu mặt kính: Kính khoáng Mineral\r\nChất liệu dây: Thép không gỉ\r\nChống nước: 10 ATM - Tắm, bơi\r\nThương hiệu: Nhật Bản\r\nHãng CASIO', 1),
(5, 'Đồng Hồ Casio Nữ BGD-570-4DR', 1800000, 'https://cdn.pnj.io/images/thumbnails/435/435/detailed/74/BGD-570-4DR_Desktop_1.jpg', 'Thương hiệu:Casio\r\nGiới tính:Nữ\r\nKích thước mặt: > 45mm\r\nĐộ dày vỏ máy: 13mm\r\nXuất xứ bộ máy: Nhật Bản\r\nLắp ráp tại: Trung Quốc\r\nLoại máy đồng hồ: Quartz\r\nLoại mặt kính: Kính Khoáng Cứng\r\nChất liệu dây: Dây Cao Su\r\nChất liệu vỏ: Vỏ Thép Cao Cấp Không Gỉ 316L\r\nHình dạng mặt: Tròn\r\nĐộ chịu nước: 200m\r\nSố Kim: 0 Kim\r\nĐá Gắn Kèm Đồng Hồ: Không gắn đá\r\nChứng nhận Chronometer: Không\r\nChức năng chính: Du', 2),
(6, 'Đồng hồ Casio Nam A168WGG-1BDF', 1400000, 'https://product.hstatic.net/1000122386/product/a168wgg-1b_6b347d5193b14e068a7296fb371f00ab_grande.png', 'Thông số kỹ thuật A168WGG-1BDF\r\nVật liệu vỏ/gờ: Mạ crôm đen/nhựa\r\nChốt có thể điều chỉnh\r\nDây đeo bằng thép không gỉ\r\nMặt kính nhựa\r\nDây đeo mạ ion màu xám\r\nChống nước\r\nĐèn cực tím phát quang điện tử\r\nĐồng hồ bấm giờ 1/100 giây\r\nKhả năng đo: 59\'59.99\'\'\r\nChế độ đo: Thời gian đã trôi qua, ngắt giờ, thời gian về đích thứ nhất - thứ hai\r\nBáo giờ hàng ngày\r\nTín hiệu thời gian hàng giờ\r\nL', 1),
(7, 'Đồng hồ Nam Casio MTP-V004L-7AUDF', 600000, 'https://cdn.tgdd.vn/Products/Images/7264/208417/casio-mtp-v004l-7audf-nam1-org.jpg', 'Đối tượng sử dụng: Nam\r\nĐường kính mặt:40 mm\r\nChất liệu mặt kính:Kính khoáng Mineral\r\nChất liệu dây:Da tổng hợp\r\nBộ máy:Pin (Quartz)\r\nChống nước:3 ATM - Rửa tay, đi mưa\r\nThương hiệu: Nhật Bản', 1),
(8, 'Đồng hồ Casio Nữ Sheen SHE-3069PG-9AUDF', 4200000, 'http://product.hstatic.net/1000122386/product/she-3069pg-9audf_76d4bcdc6a8e48c2ac83d16ab5a3cedd_grande.png', 'GIỚI THIỆU SẢN PHẨM SHE-3069PG-9AUDF\r\nViền đính đá Sparkling Swarovski®\r\nHiển thị thứ, ngày, 24h\r\nChống nước 50m\r\nBộ phận quý giá này có thể nhận dạng được bằng nhãn “Được trang trí bằng pha lê từ Swarovski®” có vai trò như chứng nhận hàng thật. Nhãn này đánh dấu sản phẩm được chế tạo bằng pha lê Swarovski® chính hãng.\r\nCHI TIẾT SẢN PHẨM SHE-3069PG-9AUDF\r\nHiển thị ngày\r\nChấm công thường xu', 2),
(9, 'Đồng Hồ Casio Nữ BA-110-4A2DR', 2800000, 'https://cdn.pnj.io/images/thumbnails/435/435/detailed/66/BA-110-4A2DR_Desktop_1.jpg', 'Sản phẩm thuộc dòng Baby-G - mẫu đồng hồ thể thao dành cho nữ. Cấu trúc chống va đập, chống sốc, chống nước lên đến 100 mét, thiết kế độc đáo và các biến thể màu sắc trẻ trung phù hợp với các bạn nữ có phong cách năng động thời trang và cá tính.\r\nThương hiệu:Casio\r\nGiới tính:Nữ\r\nPhong cách:Thời trang\r\nKích thước mặt:> 45mm\r\nXuất Xứ Thương Hiệu:Nhật Bản\r\nXuất xứ bộ máy:Nhật Bản\r\nLắp ráp tại:Trung Q', 2),
(10, 'Đồng hồ Nam Casio EQS-800BCD-2AVUDF', 1200000, 'https://cdn.tgdd.vn/Products/Images/7264/237465/casio-eqs-800bcd-2avudf-nam-600x600.jpg', 'Thương hiệu đồng hồ nổi tiếng đến từ Nhật Bản không ngừng cải tiến và cho ra mắt những dòng sản phẩm chất lượng phù hợp với nhiều đối tượng khách hàng. Những dòng sản phẩm nổi tiếng của Casio là: G-Shock với thiết kế mạnh mẽ cùng độ bền cao, Edifice thiết kế hiện đại cùng nhiều tính năng vượt trội, Sheen với thiết kế cổ điển và sang trọng,…\r\nCấu hình Đồng hồ Nam Casio EQS-800BCD-2AVUDF\r\nĐối tượng ', 1),
(11, 'Đồng Hồ Nam Casio MTP-EX300L-2AVDF', 2300000, 'http://itime.vn/wp-content/uploads/2018/12/MTP-EX300L-2AV-00.jpg', 'Đồng hồ nam MTP-EX300L-2AV dây da màu đen cao cấp với thiết kế viền mặt đồng hồ được mạ bạc đầy sang trọng, nam tính. Mặt đồng hồ màu xanh trẻ trung điểm ấn tượng chính là số la mã lấy cảm hứng từ các dòng đồng hồ Châu Âu đậm chất cổ điển.\r\nĐồng hồ nhiều kim\r\nKhả năng chống nước ở độ sâu 50 mét\r\nChỉ báo ngày, thứ và 24 giờ\r\nDây đeo bằng da thật\r\nThông số kỹ thuật:\r\nVật liệu vỏ / gờ: Thép không gỉ\r', 1),
(12, 'Đồng hồ Casio EQB-510D-1ADR', 12200000, 'https://www.dangquangwatch.vn/upload/product/1687043581_Dong-ho-Casio-EQB-510D-1ADR.jpg', ' Đồng hồ Casio EQB-510D-1ADR\r\nMặt đồng hồ màu đen trẻ trung, mạnh mẽ.\r\nHãng sản xuất: Đồng hồ Casio\r\nKiểu dáng: Đồng hồ nam\r\nMáy: Pin\r\nChất liệu vỏ: Thép không gỉ hay còn gọi là inox (All Stainless Steel)\r\nChất liệu dây: Thép không gỉ\r\nBảo hành theo hãng: 1 năm\r\nBảo hành tại Đăng Quang: 2 năm\r\nXuất xứ: Nhật Bản\r\nMặt kính: Mineral Crystal', 1),
(13, 'Đồng Hồ Casio Nữ LTP-VT01L-7B3UDF', 999000, 'https://casiovietnam.net/upload/product/dong-ho-casio/LTP-VT01L-7B3-00.jpg', 'Về tính năng, thiết kế đồng hồ Nữ Casio dây da màu xanh cao cấp siêu bền, mang đầy đủ các tiêu chuẩn của hãng đồng hồ Casio với khả năng chống nước, chống va đập, chầy xước, độ chính xác ±20 giây/tháng, vỏ được làm từ thép chống gì, bền bỉ với thời gian. Mặt đồng hồ Casio LTP-VT01L-7B3 màu mới này được lắp mặt kính cứng có khả năng chống trầy xước cao, như vậy chúng ta có thể hoàn toàn yên tâm vận', 2),
(14, 'Đồng hồ Casio LTP-E308L-4AVDF ', 2450000, 'https://casiovietnam.net/upload/image/data/LTP-E308L-4AVDF-W300.png', 'Mô tả sản phẩm\r\nĐồng hồ Casio LTP-E308L-4AVDF với thiết kế đơn giản, mặt kim với nhiều tính năng cao cấp cùng giá thành vừa phải sẽ là một sự lựa chọn hợp lý cho bạn. Mặt đồng hồ 6 kim mang lại sự độc đáo trong thiết kế nhưng được mạ lớp mạ vàng hồng càng giúp cho chiếc đồng hồ trở nên hài hòa và đặc biệt hơn. Dây da thật màu hồng không chỉ mang lại sự mềm mại cho đôi tay mà còn mang lại sự nữ tín', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `IDuser` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `Pass` text NOT NULL,
  `Address` varchar(300) NOT NULL,
  `Phone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`IDuser`, `Name`, `Email`, `Pass`, `Address`, `Phone`) VALUES
(8, 'Nguyen Van A', 'nguyena@gmail.com', 'fcea920f7412b5da7be0cf42b8c93759', 'Da Nang', '09864678'),
(9, 'Nguyen Thi B', 'nguyenthib@gmail.com', 'fcea920f7412b5da7be0cf42b8c93759', 'Tp Ho Chi Minh', '8909876723'),
(12, 'Ly Diem Phuong', 'diemphuong@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 'Pleiku, Gia Lai', '0826834909');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  ADD PRIMARY KEY (`IDchitet`),
  ADD KEY `IDdonhang` (`IDdonhang`),
  ADD KEY `ID` (`ID`);

--
-- Indexes for table `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`IDdonhang`);

--
-- Indexes for table `loaisanpham`
--
ALTER TABLE `loaisanpham`
  ADD PRIMARY KEY (`IDLoai`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `IDLoai` (`IDLoai`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`IDuser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  MODIFY `IDchitet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `donhang`
--
ALTER TABLE `donhang`
  MODIFY `IDdonhang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `loaisanpham`
--
ALTER TABLE `loaisanpham`
  MODIFY `IDLoai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `IDuser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  ADD CONSTRAINT `chitietdonhang_ibfk_1` FOREIGN KEY (`IDdonhang`) REFERENCES `donhang` (`IDdonhang`),
  ADD CONSTRAINT `chitietdonhang_ibfk_2` FOREIGN KEY (`ID`) REFERENCES `sanpham` (`ID`);

--
-- Constraints for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`IDLoai`) REFERENCES `loaisanpham` (`IDLoai`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
