<h1> EMPLOYEE </h1>
<p>Membuat model</p>
<ul>
  <li>Nama</li>
  <li>Phone</li>
  <li>Email</li>
  <li>Password</li>
  <li>Created at</li>
  <li>Updated at</li>
</ul>

<p>Membuat guard, terdiri dari LocalAuthGuard dan JwtAuthGuard</p>
<ul>
  <li>SessionSerializer</li>
  <li>LocalStrategy</li>
  <li>LocalAuthGuard</li>
  <li>JwtStrategy</li>
  <li>JwtAuthGuard</li>
</ul>

<p>Route</p>
<code>1. POST { api/employee/add } </code>
<code>2. POST { api/employee/login } </code>
<code>3. GET { api/employee/home } </code>
<code>4. GET { api/employee/find } </code>
<code>5. PUT { api/employee/employee/:id } </code>
<code>6. DELETE { api/employee/employee/:id } </code>

<p>Pattern</p>
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