var index = 0;
var result_count = 5;

function trim_string(string, length)
{
  return string.substring(0, length);
}
function display_search_result(image, title, details)
{
image_str = 'content: url('+image+');';

search_results = document.getElementById("search-results");
outer_box = document.createElement("div");
outer_box.classList.add('search-result-box');
image_box = document.createElement("div");
image_box.classList.add('search-result-image-box');
image = document.createElement("div");
image.classList.add('search-result-image');


image.style.cssText = image_str;
inner_box = document.createElement("div");

inner_box.classList.add('search-result-content');
div_title = document.createElement("div");
div_title.classList.add("search-result-title");
div_title.innerHTML = title;

div_details = document.createElement("div");
div_details.classList.add("search-result-details");
div_details.innerHTML = trim_string(details, 250);

inner_box.appendChild(div_title);
inner_box.appendChild(div_details);
image_box.appendChild(image);
outer_box.appendChild(image_box);
outer_box.appendChild(inner_box);
search_results.appendChild(outer_box);
}

function next_page(value)
{
  clear_search_results();
  get_search_results_batch(value)
}

function prev_page(value)
{
  start_index = value - result_count + 1;
  if(start_index>0){
    clear_search_results();
    get_search_results_batch(start_index);
  }
}

function generate_additional_pages(p_value, n_value){
  search_results = document.getElementById("search-results");
  e = document.getElementById("additional-pages");
  p = document.createElement("a");
  n = document.createElement("a");
  p.innerHTML = "prev";
  p.href = "#";

  if(p_value > 0){
    p_callback = "prev_page(" + p_value.toString() + ")";
    p.setAttribute('onclick', p_callback);    
  }
  n.innerHTML = "next";
  n.href = "#";
  n_callback = "next_page(" + n_value.toString() + ")";
  n.setAttribute('onclick', n_callback);
  e.appendChild(p);
  e.appendChild(n);
  search_results.insertAdjacentHTML("afterend", e);
}
function get_search_string(){
  return document.getElementById("search-bar").value;
}
function set_search_string(value){
  document.getElementById("search-bar").value = value;
}

function clear_div(id)
{
    document.getElementById(id).innerHTML = "";
}

function clear_search_results(){
  clear_div("search-results");
  clear_div("additional-pages");
} 

function reload()
{
  window.location.reload(); 
  return true;
}

function get_search_result(i)
{
  title = '[ ' + i.toString() + ' ] ' + ' ' + search_string;

  result_details = search_string + i.toString() +"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo architecto iste ea pariatur tenetur ex fugit magni molestias aut dolorem et atque provident quam quae dolores commodi possimus, doloremque eius hic modi nihil harum aliquam! Ut tenetur consequatur veniam! Temporibus, quae sint incidunt sed est blanditiis molestiae architecto sunt veritatis corporis error autem consectetur obcae end";

  display_search_result("search_picture.png", title, result_details);
}

function get_search_results_batch(start_index)
{
  for(i=start_index;i<start_index+result_count;i++){
    //console.log(i);
    get_search_result(i);
  }
  generate_additional_pages(start_index-1, start_index+result_count);
}

function search_main(search_string)
{
  index = 0;
  get_search_results_batch(1);
}

function search_query(){
  search_string = get_search_string();
  if(!search_string){
     console.log("empty search");
     return false;
  }
  clear_search_results();
  
  search_main(search_string);
}

window.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    search_query();
  }
});
