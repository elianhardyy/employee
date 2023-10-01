<h1> EMPLOYEE </h1>
<h3>Module</h3>
<ul>
  <li>AppModule</li>
  <li>EmployeeModule</li>
  <li>JwtModule</li>
  <li>PassportModule</li>
  <li>TypeOrmModule</li>
<ul>
<br>
<h3>Membuat model</h3>
<ul>
  <li>Nama</li>
  <li>Phone</li>
  <li>Email</li>
  <li>Password</li>
  <li>Created at</li>
  <li>Updated at</li>
</ul>
<br>
<h3>Membuat guard, terdiri dari LocalAuthGuard dan JwtAuthGuard</h3>
<ul>
  <li>SessionSerializer</li>
  <li>LocalStrategy</li>
  <li>LocalAuthGuard</li>
  <li>JwtStrategy</li>
  <li>JwtAuthGuard</li>
</ul>
<br>
<h3>Route</h3>
<code>1. POST { api/employee/add } </code><br>
<code>2. POST { api/employee/login } </code><br>
<code>3. GET { api/employee/home } </code><br>
<code>4. GET { api/employee/find } </code><br>
<code>5. PUT { api/employee/employee/:id } </code><br>
<code>6. DELETE { api/employee/employee/:id } </code><br>
<br>
<h3>Pattern</h3>
<ul>
  <li>Register dengan route seperti nomer 1 </li>
  <li>Login dengan route seperti nomer 2 </li>
    <ul>
      <li>Terdapat validasi yaitu email dan password</li>
      <li>lalu masuk local strategy</li>
      <li>lalu masuk local auth guard</li>
      <li>session serialize</li>
      <li>jwt sign untuk masuk ke halaman utama</li>
    </ul>
  <li>Home dengan route seperti nomer 3 </li>
    <ul>
      <li>session deserialize</li>
      <li>jwt akan mendekripsi dari token saat login </li>
    </ul>
  <li>Menemukan semua Employee dengan route seperti nomer 4 </li>
  <li>Edit Employee dengan route seperti nomer 5 </li>
  <li>Delete Employee dengan route seperti nomer 6 </li>
</ul>