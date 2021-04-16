 <?php
    //header('Content-Type: application/json');
    
    //veritabanı bilgileri
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "nodemysql";

    // mysql bağlantısı
    $db = mysqli_connect($host, $dbusername, $dbpassword, $dbname);

	  $newsArray = array();
	

    //mysql bağlantı hatası kontrolü
     if (!$db){
       die("Connection failed: " . mysqli_connect_error());
     }else{
         $sql = "SELECT * FROM news";
         $insert = mysqli_query($db, $sql);

         if(!$insert){
           echo mysqli_error();
         }
         else{
             while($row = mysqli_fetch_assoc($insert)){
                //print_r($row);
                array_push($newsArray, $row);
             }
             echo json_encode($newsArray);
          
         }
       }

    mysqli_close($db);
?>