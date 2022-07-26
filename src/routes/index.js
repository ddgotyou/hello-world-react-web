import ConflictTest from "../views/conflictTest"
import O1 from "../views/O1"
import O2 from "../views/O2"
import O3 from "../views/O3"
import O4 from "../views/O4"
import O5 from "../views/O5"

let testRoutes = [
    {
        path:"/sub1/1",
        component:<ConflictTest/>,
        exact:true,
        meta:{
            title:"冲突检测",
            key:["1"]
        }
    },{
        path:"/sub2/2",
        component:<O1/>,
        exact:true,
        meta:{
            title:"O1",
            key:["2"]
        } 
    },{
        path:"/sub2/3",
        component:<O2/>,
        exact:true,
        meta:{
            title:"O2",
            key:["3"]
        } 
    },{
        path:"/sub2/4",
        component:<O3/>,
        exact:true,
        meta:{
            title:"O3",
            key:["4"]
        } 
    },{
        path:"/sub3/5",
        component:<O4/>,
        exact:true,
        meta:{
            title:"O4",
            key:["5"]
        } 
    },{
        path:"/sub3/6",
        component:<O5/>,
        exact:true,
        meta:{
            title:"O5",
            key:["6"]
        } 
    }

]

export default testRoutes;