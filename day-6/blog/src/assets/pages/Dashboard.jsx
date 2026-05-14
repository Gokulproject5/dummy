import React, { useContext } from 'react'
import Header from '../components/Header'
import { themeContext } from '../context/themeApi'
import Login from '../components/Login';

const Dashboard = () => {
    const { currentUser } = useContext(themeContext);


    if (!currentUser) return <Login />;

    return (
        <>

            <div className=' min-h-screen  dark:text-white dark:bg-slate-900 '>
                <div>
                    <Header />

                </div>
                <div className='flex '>

                    <div className=' mx-auto min-w-[400px]'>
                        <div className='flex space-x-5 items-center w-200 bg-slate-200 dark:bg-slate-800 my-10 px-10 py-5 rounded shadow dark:shadow-slate-100 shadow-gray-400'>
                            <div className='w-20 h-20 bg-white rounded-full '>
                                <img src={currentUser.profile || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACUCAMAAAAAoYNxAAAAOVBMVEWjo6P///+mpqbk5OSgoKD8/PydnZ3Gxsapqanr6+vv7+/39/fb29uysrK7u7usrKzU1NTMzMyXl5eKPK8ZAAAEe0lEQVR4nO2ci3KrIBCGEVdE5aK+/8MeLrU1PSYFJCyZ4ZtO0ybO9M/mZ1lwKSGNRqPRaDQajcbnAowBIZQeP9WOUanHTfQOsY26dtWw83Vahu6bYZlWvtcrGqiauwtmResUDWS8FOxEj6RC0Uz2zwRbesmwFT5CCduGV4qNqzdmLqsHoOK1YIuoydGgX5ri2xy8Is1Px90jM7bOA2BLmOKuW2qZV4Jc8eUNbK0OtoUrdnkDHZDBtnDWkPjWgClGcddN6JLZGKe460Zsa4Rni4MFWXJ8kPHDHDiJnJlRSw1Q0b4wzlCYI5Ct8Yq7bsV0Bo/McJ4JsTyKnEYOMKcTUCmKuw7RzBBTXpzYECUHrEWuEIiSI8rOM32THAFLynGo1VyyZLy55AON8YkZIzUvoyn+yNlP/rERd82AuWTVCRW+qfE1nuLE8Yc4+uzSL8EZA+riD1KcMWvUrQyW4AyBu8IGHi8Ze5d5jw6z2HEVmxVr5AAcOLZiApH7RSP6NiIhNKqc62u4KwU6YmdgwU1wByDDJVewIe4IngNx570HYAzyxlLD0DsAFRDnAXXH8z8Y+TPOM6nGFR4g68tAD2uF7Q3wqruhryVVPAKgnuxrTEpL/Hn6EtilmH+ZepmFtK/pGqY9cuFOYFptYpoHY+xhmCexKc1Ac84pds3pgMvAASNcS4fmxLUGaGolF1Z3yamL5VcEwfN9oSa8CsW+Vejnm2tA9A/05wpO7e/cvin6/c5wfG3VuAcKlDqLUC/FP7hPwD7v1AH1Tz1cWF4xdTJMFMHF1arzEadHoO2L9jL3BHD/Lt01GEMRnEhwf9yGmR4hBq/VhdPp5s7S3P1EuG88O1mnpGTqE4aV7APu5Prw+U8fDsncORqsZDiZpbRmo+AQYX6xKcwZ4yz58Al1DvFXM6ea2qBDac0mVjZ6Nqwm4owx714XdPCp4csE4C51w48e79E8xco3+sGPHW3cqE9iwGy/spk5tMHFkoH9Iuck4fJHDYWdjbRU2ypsv/XksF3XYt2UJKy2zmvG9l1u/bwsw0XRPAzLMveb3HdWR5FvPnautqAN0HlTHNCjzUCOImIfYxajBMRYm7899vEdXP1IkEJtSmORdHfHuFtoBNGMqMRbq55eFV5wm2XeLcFedMn5b5d9oiXODL0sdeIkqPE+DFGkCgUStgEXxlLgwAnjt038SM/fPAzZ9ZGiO8zqnZqBJDVM/sUbt+uAZBt3j7ztkAzE3ciJoX+PZtCJzU8hTO+47QM8+8A7M+fP0BBz4CWFPvsYTG3WCid3Ywm8Jbs9smbVHHTH6TZZ71hBxrLiOUtGySm9LSnk64cxtijhi24YspUb75v1fpOr9SG1TTKFTCOwXJBzhTmm3eI+We7ClkoXnixJYy+puOsytKSV9UUWZ6QdNksnwzG11FMNqdw/DQG0SHnxw3J7TZV4Pu6G5NtmTjrqeUvy7QkwqQ/8Dvd76ZrkJrlJbpKb5Ca5Sf4IyWUVZ/gnJaD6wmTYyqCFuS240Wg0Go1Go9HIxj+THzaesLFkKAAAAABJRU5ErkJggg=="}
                                    className='w-full h-full object-fit rounded-full' alt="" />
                            </div>
                            <div>
                                <h1 className='text-md font-mono'>Fullname: {currentUser.fullname}</h1>
                                <p className='text-sm font-mono'>UserName: {currentUser.username}</p>
                                <p className='text-sm font-mono'>Role: {currentUser.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard