// REGISTER
function register() {
    let user = regUser.value;
    let pass = regPass.value;

    if (!user || !pass) {
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("loginUser", user);
    localStorage.setItem("loginPass", pass);
    alert("Registration successful");
    window.location = "login.html";
}


// LOGIN
function login() {
    let user = loginUser.value;
    let pass = loginPass.value;

    if (
        user === localStorage.getItem("loginUser") &&
        pass === localStorage.getItem("loginPass")
    ) {
        window.location = "index.html";
    } else {
        alert("invaild login");
    }
}

// LOGOUT
function logout() {
    window.location = "login.html";
}

// search
function searchDrug() {
    let input =
        document.getElementById("searchinput").value.toLowercase();
    let drugs =
        document.getElementById("druglist").getElementsByTagName("li");
}

// DRUG STOCK CONTROL
let drugs = JSON.parse(localStorage.getItem("drugs")) || [];

function addDrug() {
    let drug = {
        name: drugName.value,
        category: drugCategory.value,
        price: drugPrice.value,
        stock: drugStock.value
    };

    if (!drug.name || !drug.category || !drug.price || !drug.stock) {
        alert("Fill all drug fields");
        return;
    }

    drugs.push(drug);
    localStorage.setItem("drugs", JSON.stringify(drugs));
    displayDrugs();
    drugName.value = "";
    drugCategory.value = "";
    drugPrice.value = "";
    drugStock.value = "";
}

function deleteDrug(index) {
    drugs.splice(index, 1);
    localStorage.setItem("drugs", JSON.stringify(drugs));
    displayDrugs();
}

function displayDrugs() {
    let table = document.getElementById("drugTable");
    table.innerHTML = "";

    drugs.forEach((d, i) => {
        table.innerHTML += `
            <tr>
                <td>${d.name}</td>
                <td>${d.category}</td>
                <td>${d.price}</td>
                <td>${d.stock}</td>
                <td><button onclick="deleteDrug(${i})">Delete</button></td>
            </tr>
        `;
    });
}

if (document.getElementById("drugTable")) {
    displayDrugs();
}
