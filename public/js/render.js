let url = new URL(window.location.href);

let studentPerPage = Number(url.searchParams.get("_limit")) || 5;

let page = Number(url.searchParams.get("_page")) || 1;

import pagination from "./pagination.js";
export {studentPerPage, page}; 

export default function({link, total, data}){
     console.log(data);
    let html = data.map((s) => {
        return `
        <tr>
        <th scope="row">${s.id}</th>
        <td>${s.first_name}</td>
        <td>${s.last_name}</td>
        <td>${s.email}</td>
        <td>${s.phone}</td>
        <td><a href="student.html?studentId=${s.id}"><i class="bi bi-info-circle"></i></a></td>
      </tr>`;
     }).join("");
     document.querySelector(".data").innerHTML = html;

     let totalPage = Math.ceil(total / studentPerPage);
     let pg = pagination(link, page, totalPage);
     document.querySelector(".nav").innerHTML = pg;
}

export function renderStudent({ first_name, last_name, email, phone }){

   let  student = `
        <p>Họ: ${first_name}</p>
        <p>Tên:${last_name}</p>
        <p>Email: ${email}</p>
        <p>Số điện thoại: ${phone}</p>
      `;
      document.title = first_name + " " + last_name;
     document.getElementById("info").innerHTML = student;
}
export {url};