import React from 'react'

export const UrinshBolovsruulalt = () => {
    const urinsh =[{
        1:"",
        2:'',
    },{}]
  return (
    <div>
        <h1></h1>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>№</th>
                    <th>Технолонийн ажилын нэр</th>
                    <th>Хэмжих нэгж</th>
                    <th>Ажилын хэмжээ</th>
                    <th>Ажилын явуулах хугацаа/сар,өдөр/ 1-га-д</th>
                    <th>Ажилах агентын бүрэлдхүүн</th>
                    <th>Шаардагдах дизель түлш /л/</th>
                    <th>Ээлжийн норм</th>
                    <th>Шаардагдах хүн өдөр</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                   urinsh.map((e, index:number)=>{
                    return(
                       <React.Fragment>
                         <tr className="bg-base-200" key={index}>
                            <th>{index+1}</th>
                            <th>{}</th>
                            <th>{}</th>
                            <th>{}</th>
                            <th>{}</th>
                            <th>{}</th>
                            <th>{}</th>
                            <th>{}</th>
                            <th>{}</th>
                            <th>{}</th>
                            <th>{}</th>
                           
                        </tr>
                       </React.Fragment>
                    )
                   })
                }
                </tbody>
            </table>
</div>
    </div>
  )
}