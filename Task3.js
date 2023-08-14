const task_edit_el = document.createElement('button'); 

                 task_edit_el.classList.add('edit'); 

                 task_edit_el.innerText = 'Edit'; 

  

                 const task_delete_el = document.createElement('button'); 

                 task_delete_el.classList.add('delete'); 

                 task_delete_el.innerText = 'Delete'; 

  

                 task_actions_el.appendChild(task_edit_el); 

                 task_actions_el.appendChild(task_delete_el); 

  

                 task_el.appendChild(task_actions_el); 

  

                 list_el.appendChild(task_el); 

  

                 input.value = ''; 

  

                 task_edit_el.addEventListener('click', (e) => { 

                         if (task_edit_el.innerText.toLowerCase() == "edit") { 

                                 task_edit_el.innerText = "Save"; 

                                 task_input_el.removeAttribute("readonly"); 

                                 task_input_el.focus(); 

                         } else { 

                                 task_edit_el.innerText = "Edit"; 

                                 task_input_el.setAttribute("readonly", "readonly"); 

                         } 

                 }); 

  

                 task_delete_el.addEventListener('click', (e) => { 

                         list_el.removeChild(task_el); 

                 }); 

         }); 

 });
