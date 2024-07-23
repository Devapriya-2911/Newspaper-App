import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWBdo5OxBOQ4t4Wf42kWBBbJYxaY6NNe2Jqw&s" alt="Bootstrap" width="30" height="24"/>
    </a>
    <a class="navbar-brand" href="#">THE HINDU</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/add">ADD</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search">SEARCH</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/delete">DELETE</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/view">VIEW</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar