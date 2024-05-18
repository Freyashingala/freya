fetch('https://coding-week-2024-api.onrender.com/api/data')
         .then(response => response.json())
         .then(data => {
             renderBlogs(data);
             addModalFunctionality(data);
         })
         .catch(error => console.error('Error fetching data:', error));
 
 function renderBlogs(data) {
     const featuredBlogsContainer = document.querySelector('.featured-blogs');
     const latestBlogsContainer = document.querySelector('.latest-blogs');

     data.slice(0,1).forEach(blog => {
          const blogElement = document.createElement('div');
          blogElement.classList.add('featured-blog');
           
          blogElement.innerHTML= ` 
          <div class="img1">
          <img src="${blog.image}" style="width:400px; height:450px">
          <div id="banner" style="left: 40px; width: 60px; top: 290px;">
               <a href="#">${blog.type}</a>
          </div>
          
          <div id="banner" style="left: 120px;  width: 70px; top: 290px;">
               <a href="#">Featured</a>
          </div>
          
          <div class="text1" style="font-size: 35px; top: 320px;
          left: 25px; width: 390px;"><a href="#">Why reading newspapers are mo...</a></div>

          <div class="date" style="top: 420px; left: 60px;">
               <a href="#">${blog.author}</a>
          </div>
          
          <div class="date" style="top: 420px; left: 180px;">
               &#128197; ${blog.date}
          </div>
     </div>`;
 
          featuredBlogsContainer.appendChild(blogElement);
     });

     data.slice(1, 2).forEach(blog => {
         const blogElement = document.createElement('div');
         blogElement.classList.add('featured-blog');
  
     blogElement.innerHTML= `
               <div class="img1" style="left: 450px;">
               <a href="#"><img src="${blog.image}" style="width:225px; height:450px"></a>
                   
                   <div id="banner" style="left: 30px; width: 70px; top: 290px;">
                        <a href="#">Featured</a>
                    </div>
     
                   <div id="banner" style="left: 110px; width: 70px; top: 290px;">
                        <a href="#">${blog.type}</a>
                   </div>
    
                   <div class="text1" style="font-size: 23px; top: 330px; left: 30px; width: 210px;">
                        <a href="#">${blog.headline}</a>
                   </div>
    
                   <div class="date" style="top: 390px; left: 40px;">
                        <a href="#">${blog.author}</a>
                   </div>
                   
                   <div class="date" style="top: 420px; left: 40px;">
                        &#128197; ${blog.date}
                   </div>
               </div>`;

               featuredBlogsContainer.appendChild(blogElement);})

     data.slice(2, 3).forEach(blog => {
         const blogElement = document.createElement('div');
         blogElement.classList.add('featured-blog');
  
     blogElement.innerHTML= `
     <div class="img1" style="left: 705px;">
     <a href="#"><img src="${blog.image}" style="width:210px; height:210px"></a>
         
         <div id="banner" style="left: 25px; width: 70px; top: 60px;">
              <a href="#">Featured</a>
         </div>

         <div id="banner" style="left: 105px; width: 70px;  top: 60px;">
              <a href="#">${blog.type}</a>
         </div>

         <div class="text1" style="font-size: 18px; top: 95px; left: 25px; width: 204px;">
              <a href="#">${blog.headline}</a>
         </div>

         <div class="date" style="top: 160px; left: 40px;">
              <a href="#">${blog.author}</a>
         </div>
         
         <div class="date" style="top: 190px; left: 40px;">
              &#128197; ${blog.date}
         </div>
     </div>`;

               featuredBlogsContainer.appendChild(blogElement);})

     data.slice(3, 4).forEach(blog => {
          const blogElement = document.createElement('div');
          blogElement.classList.add('featured-blog');
             
                blogElement.innerHTML= `
               <div class="img1" style="top: 425px; left: 705px;">
               <a href="#"><img src="${blog.image}" style="width:210px; height:210px"></a>
                    
                    <div id="banner" style="left: 25px; width: 70px; top: 60px;">
                         <a href="#">Featured</a>
                    </div>
     
                    <div id="banner" style="left: 105px; width: 60px;  top: 60px;">
                         <a href="#">${blog.type}</a>
                    </div>
     
                    <div class="text1" style="font-size: 18px; top: 95px; left: 25px; width: 204px;">
                         <a href="#">${blog.headline}</a>
                    </div>
     
                    <div class="date" style="top: 160px; left: 40px;">
                         <a href="#">${blog.author}</a>
                    </div>
                    
                    <div class="date" style="top: 190px; left: 40px;">
                         &#128197; ${blog.date}
                    </div>
               </div>`;
           
          featuredBlogsContainer.appendChild(blogElement);})
           
     data.slice(4,5).forEach(blog => {
         const blogElement = document.createElement('div');
         blogElement.classList.add('latest-blog');
          
         blogElement.innerHTML= `
         <div class="news" style="top: 20px; left:990px;">
               <img src="${blog.image}" style="width:85px; height:85px">
                        <div class="text2" style="top: 300px;">
                             <a href="#">${blog.headline}</a>
                        </div>
                        <div class="date" style="top: 65px; left: 120px;">
                             &#128197; ${blog.date}   
                        </div>
              </div>`;

         latestBlogsContainer.appendChild(blogElement);
     });

     data.slice(5,6).forEach(blog => {
          const blogElement = document.createElement('div');
          blogElement.classList.add('latest-blog');
           
          blogElement.innerHTML= `
          <div class="news" style="top: 120px; left:990px;">
                <img src="${blog.image}" style="width:85px; height:85px">
                         <div class="text2" style="top: 300px;">
                              <a href="#">${blog.headline}</a>
                         </div>
                         <div class="date" style="top: 65px; left: 120px;">
                              &#128197; ${blog.date}   
                         </div>
               </div>`;
 
          latestBlogsContainer.appendChild(blogElement);
      });

      data.slice(6,7).forEach(blog => {
          const blogElement = document.createElement('div');
          blogElement.classList.add('latest-blog');
           
          blogElement.innerHTML= `
          <div class="news" style="top: 220px; left:990px;">
                <img src="${blog.image}" style="width:85px; height:85px">
                         <div class="text2" style="top: 300px;">
                              <a href="#">${blog.headline}</a>
                         </div>
                         <div class="date" style="top: 65px; left: 120px;">
                              &#128197; ${blog.date}   
                         </div>
               </div>`;
 
          latestBlogsContainer.appendChild(blogElement);
      });

      data.slice(7,8).forEach(blog => {
          const blogElement = document.createElement('div');
          blogElement.classList.add('latest-blog');
           
          blogElement.innerHTML= `
          <div class="news" style="top: 320px; left:990px;">
                <img src="${blog.image}" style="width:85px; height:85px">
                         <div class="text2" style="top: 300px;">
                              <a href="#">${blog.headline}</a>
                         </div>
                         <div class="date" style="top: 65px; left: 120px;">
                              &#128197; ${blog.date}   
                         </div>
               </div>`;
 
          latestBlogsContainer.appendChild(blogElement);
      });

      data.slice(8,9).forEach(blog => {
          const blogElement = document.createElement('div');
          blogElement.classList.add('latest-blog');
           
          blogElement.innerHTML= `
          <div class="news" style="top: 420px; left:990px;">
                <img src="${blog.image}" style="width:85px; height:85px">
                         <div class="text2" style="top: 300px;">
                              <a href="#">${blog.headline}</a>
                         </div>
                         <div class="date" style="top: 65px; left: 120px;">
                              &#128197; ${blog.date}   
                         </div>
               </div>`;
 
          latestBlogsContainer.appendChild(blogElement);
      });

      data.slice(9,10).forEach(blog => {
          const blogElement = document.createElement('div');
          blogElement.classList.add('latest-blog');
           
          blogElement.innerHTML= `
          <div class="news" style="top: 520px; left:990px;">
                <img src="${blog.image}" style="width:85px; height:85px">
                         <div class="text2" style="top: 300px;">
                              <a href="#">${blog.headline}</a>
                         </div>
                         <div class="date" style="top: 65px; left: 120px;">
                              &#128197; ${blog.date}   
                         </div>
               </div>`;
 
          latestBlogsContainer.appendChild(blogElement);
      });

      data.slice(10,11).forEach(blog => {
          const blogElement = document.createElement('div');
          blogElement.classList.add('latest-blog');
          
          
          blogElement.innerHTML= `
          <div class="news" style="top: 620px; left:990px;">
                <img src="${blog.image}" style="width:85px; height:85px">
                         <div class="text2" style="top: 300px;">
                              <a href="#">${blog.headline}</a>
                         </div>
                         <div class="date" style="top: 65px; left: 120px;">
                              &#128197; ${blog.date}   
                         </div>
               </div>`;
 
          latestBlogsContainer.appendChild(blogElement);
      });
 }
 
function addModalFunctionality(data) {
     const modal = document.getElementById('modal');
     const modalBody = document.getElementById('modal-body');
     const span = document.getElementsByClassName('close')[0];
 
     document.querySelectorAll('.featured-blog, .latest-blog').forEach((blog, index) => {
          blog.addEventListener('click', () => {
               modal.style.display = 'block';
               const blogData = data[index];
 
               while (modalBody.firstChild) {
                    modalBody.removeChild(modalBody.firstChild);
               }
 
               const title = document.createElement('h2');
               title.textContent = blogData.title;
               modalBody.appendChild(title);
 
               const img = document.createElement('img');
               img.src = blogData.image;
               modalBody.appendChild(img);
 
               const content = document.createElement('p');
               content.textContent = blogData.content;
               modalBody.appendChild(content);
         });
     });
 
     span.onclick = function() {
         modal.style.display = 'none';
     }
 
     window.onclick = function(event) {
         if (event.target == modal) {
             modal.style.display = 'none';
         }
     }
 }
 