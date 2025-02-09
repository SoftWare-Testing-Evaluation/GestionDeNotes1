import React from "react";
import dayjs from "dayjs";

const StudentCard = ({ students, logo,selectedClasse,anneeprecedent,annee,user }) => {
    return (
        <div className="">
        {students.map((student, index) => (
            <div key={student.id} className="student-card w-[50%] h-[20%] m-[15px] p-[5px] " >
                 
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col w-[50%]">
                        <div className="w-[100%]">
                            <p style={{fontSize:"7px",width:'100%',textTransform:'uppercase',fontWeight:'bold'}}>republique du cameroun</p>
                            <p style={{fontSize:"7px",width:'100%'}}>Paix-Travail-Patrie</p>
                            <p style={{fontSize:"7px",width:'100%',textTransform:'uppercase'}}>ministere des enseignements secondaires</p>
                            <p style={{fontSize:"7px",width:'100%',textTransform:'uppercase'}}>delegation regionale du sud</p>
                            <p style={{fontSize:"7px",width:'100%',textTransform:'uppercase'}}>delegation departementale de la vallée du ntem</p>
                        </div>
                        <div className="flag" style={{ display: "flex",height: "10px",width: "100%" ,marginRight:'5px'}}>
                        <div style={{backgroundColor: "#4CAF50",flex: 1}}></div>
                        <div style={{backgroundColor: "#F44336",flex: 1,position: "relative"}}>
                            <div style={{color: "#FFC107",position: "absolute",top: "50%",left: "50%",transform: "translate(-50%, -50%)" }}>&#9733;</div>
                        </div>
                        <div style={{backgroundColor: "#FFC107",flex: 1}}></div>
                        </div>
                    </div>
                    <div style={{marginRight:'5px'}} >
                    <img src={logo} alt="Logo" className="logo" />
                    </div>
                    <div className="flex flex-col w-[50%]">
                        <div className="w-[100%]">
                            <p style={{fontSize:"7px",width:'100%',textTransform:'uppercase',fontWeight:'bold'}}>republic of cameroon</p>
                            <p style={{fontSize:"7px",width:'100%'}}>Peace-Work-Fatherland</p>
                            <p style={{fontSize:"7px",width:'100%',textTransform:'uppercase'}}>ministry of secondary education</p>
                            <p style={{fontSize:"7px",width:'100%',textTransform:'uppercase'}}>regional delegation of sud</p>
                            <p style={{fontSize:"7px",width:'100%',textTransform:'uppercase'}}>divisional Delegation of the NTEM Valley</p>
                        </div>
                        <div className="flag" style={{ display: "flex",height: "10px",width: "100%"}}>
                        <div style={{backgroundColor: "#4CAF50",flex: 1}}></div>
                        <div style={{backgroundColor: "#F44336",flex: 1,position: "relative"}}>
                            <div style={{color: "#FFC107",position: "absolute",top: "50%",left: "50%",transform: "translate(-50%, -50%)" }}>&#9733;</div>
                        </div>
                        <div style={{backgroundColor: "#FFC107",flex: 1}}></div>
                        </div>
                    </div>
                    
                </div>
                <div className="w-[100%] mb-[10px]"> <h1 style={{fontWeight: 'bold',fontSize:'20px', width:"100%",color:'#093c69'}}>DIOCESE D'EBOLOWA/COLLEGE MGR NKOU</h1></div>
                    
                <div className="flex flex-row justify-between mb-[10px] ">
                    <div className="w-[30%] m-[0%] p-[0%] mb-[1px]">
                    <div style={{ width: '100px', height: '95px',align:'center'}} >
                     <img src={student.urlPhoto} alt={`${student.nom} ${student.prenom}`} style={{ width: '100%', height: '100%'}} />
                   
                    </div>
                    <div className="relative w-[100%] mt-[5px] p-[5px] flex flex-row">
    {/* Conteneur de texte */}
    <div className="w-[100%] h-[25px]  z-20"> {/* Assurez-vous que le texte soit au-dessus */}
        <div className="w-[100%]  p-[0px]">
            <h1 className="font-bold text-[6px] text-black w-full">Le Principal/The principal</h1>
        </div>
    </div>
      {/* Cachet */}
      <div className="w-[100%] absolute inset-0">
        <img 
            src={logo} 
            alt="cachet" 
            className="logo" 
            style={{ width: '100%', height: '100%', opacity: 2 }} // Ajustez la valeur d'opacité ici
        />
    </div>
</div>
<p className="font-bold text-[8px] text-[#093c69] w-full">{user?.nom || 'Inconnue'} {user?.prenom || ''}</p>


                    </div>
                    <div  className="w-[70%] flex flex-col">
                    <div className="w-[100%] mb-[1px] p-[5px] rounded-[4px] bg-red-500" > 
                            <h1 className="font-bold text-[10px] uppercase text-white w-full">carte d'identite scolaire/school identity card</h1>
                    </div>
                    <div className="w-[100%] mb-[5px] p-[2px] rounded-[4px]" > 
                            <h1 className="font-bold text-[10px]  text-[#093c69] w-full">Année Scolaire/Academic year {anneeprecedent}-{annee}</h1>
                    </div>
                    <div className="w-[100%] items-start" >
    <div className="w-[100%] items-start p-[0%] m-[0%]  " >
    <img 
                        src={logo} 
                        alt="cachet" 
                        className="logo absolute" 
                        style={{ 
                            opacity: 0.5, // Rendre le cachet transparent
                            top: '60%', // Positionner à partir du milieu
                            left: '60%', // Centrer horizontalement
                            transform: 'translate(-50%, -50%)', // Ajuster pour centrer
                            pointerEvents: 'none' // Ignorer les événements de souris
                        }} 
                    />
         <div className="flex flex-row w-[100%] items-start p-[0%] m-[0%]  justify-between">
            <div className="text-left ml-2 w-[30%]"><p className="text-[10px]" >Matricule/matriculation:</p></div>
            <div className="text-rigth  w-[70%]"><h2 className="font-bold text-[10px] uppercase text-[#093c69] text-rigth ml-2">{student.matricule}</h2></div>
        </div>
        <div className="flex flex-row w-[100%] items-start p-[0%] m-[0%]  justify-between">
            <div className="text-left ml-2 w-[30%]"><p className="text-[10px]" >Nom/Name:</p></div>
            <div className="text-rigth  w-[70%]"><h2 className="font-bold text-[10px] uppercase text-[#093c69] text-rigth ml-2">{student.nom}</h2></div>
        </div>
        <div className="flex flex-row w-[100%] items-start p-[0%] m-[0%] ">
            <div className="text-left ml-2 w-[30%]"><p className="text-[10px]">Prénom/Surname:</p></div>
            <div className="text-rigth w-[70%]"><h2 className="font-bold text-[10px] uppercase text-[#093c69] ml-2">{student.prenom}</h2></div>
        </div>
        <div className="flex flex-row w-[100%] items-start p-[0%] m-[0%] ">
            <div className="text-left ml-2 w-[30%]"><p className="text-[10px]">Né(e)le/Born on:</p></div>
            <div className="text-rigth w-[70%]"><h2 className="font-bold text-[10px] uppercase text-black ml-2">{dayjs(student.dateNaissance).format('DD/MM/YYYY')}</h2></div>
        </div>
        <div className="flex flex-row w-[100%] items-start p-[0%] m-[0%] ">
            <div className="text-left ml-2 w-[30%]"><p className="text-[10px]">à/At:</p></div>
            <div className="text-rigth w-[70%]"><h2 className="font-bold text-[10px] uppercase text-black ml-2">{student.lieuNaissance}</h2></div>
        </div>
        <div className="flex flex-row w-[100%] items-start p-[0%] m-[0%] ">
            <div className="text-left ml-2 w-[30%]"><p className="text-[10px]">Contacts/Contacts:</p></div>
            <div className="text-rigth w-[70%]"><h2 className="font-bold text-[10px]  text-black ml-2">{student.telPere||''}/{student.telMere||''}</h2></div>
        </div>
        <div className="flex flex-row w-[100%] items-start p-[0%] m-[0%] ">
            <div className="text-left ml-2 w-[30%]"><p className="text-[10px]">Classe:</p></div>
            <div className="text-rigth w-[70%]"><h2 className="font-bold text-[10px] text-black ml-2">{selectedClasse?.nom || 'inconnue'}</h2></div>
        </div>
    </div>
</div>
                    <div className="w-[100%] mt-[2px]" > 
                            <h1 className="font-bold text-[12px]  text-black w-full">Fait à KYE-OSSI, le {dayjs().format('DD/MM/YYYY')}</h1>
                    </div>
                    <div className="w-[100%] mt-[1px]  text-rigth" > 
                            <p className="font-bold text-[6px]  text-black w-full">Tel:{user?.telephone} / E-mail:{user?.email}</p>
                    </div>
                    </div>
                   
                </div>
                
                </div> 
            ))}
        </div>
    );
};

export default StudentCard;
