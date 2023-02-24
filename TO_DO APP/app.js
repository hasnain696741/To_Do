
function editBtn(ele1){
    var val = ele1.parentNode.firstChild.nodeValue;
    var editVal = prompt('Enter Edit Value ',val);
    ele1.parentNode.firstChild.nodeValue = editVal;
    }
    function delete_All(){
    orderList.innerHTML = '';
    }
    
    
    function deleteBtn(ele2){
       console.log('Delete',ele2.parentNode.remove());
    }
    

    function Add_Task(){
    var ordrLst = document.getElementById('orderList');
     var inp = document.getElementById('inp-input').value;
     var crList = document.createElement('li');
     crList.setAttribute('id','liStyle')
     var txtNode = document.createTextNode(inp);
     var addBtn = document.createElement('button');
     addBtn.setAttribute('onclick','editBtn(this)');
     addBtn.innerHTML = 'Edit';
     var delBtn = document.createElement('button');
     delBtn.setAttribute('onclick','deleteBtn(this)');
     delBtn.innerHTML = 'Delete';
    crList.appendChild(txtNode);
    crList.appendChild(addBtn);
    crList.appendChild(delBtn);
    ordrLst.appendChild(crList);
    
    document.getElementById('inp-input').value = '';
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    