function e(e){return fetch(`https://api.thecatapi.com/v1/images/${e}?api_key=live_RaeMB30o8cK53Xzit1qts2oGvZcNIVdIE0sizWn04kRLekmqPWyepiCjOddIuxxA`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}const t={select:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),info:document.querySelector(".cat-info")};t.select.addEventListener("change",(function(n){e(n.target.value).then((e=>{!function({breeds:e,url:n}){const o=`\n    <img src="${n}" alt="${e[0].name}" width=300>\n    <h2>Breed: ${e[0].name}</h2>\n    <p>About: ${e[0].description}</p>\n    <p>Temperaments: ${e[0].temperament}</p>\n  `;t.info.insertAdjacentHTML("beforeend",o)}(e)})).catch(console.warn)})),fetch("https://api.thecatapi.com/v1/breeds?api_key=live_RaeMB30o8cK53Xzit1qts2oGvZcNIVdIE0sizWn04kRLekmqPWyepiCjOddIuxxA").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{!function(e){const n=e.map((({reference_image_id:e,name:t})=>`<option value="${e}">${t}</option>`)).join("");t.select.insertAdjacentHTML("beforeend",n)}(e)})).catch(console.warn);
//# sourceMappingURL=index.8ae16d77.js.map