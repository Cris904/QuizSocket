const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: '??Cu??les son los tipos de socket?',
    answers: [
      { text: 'Socket 423 : Es el z??calo que usaba para las primeras versiones de Pentium 4, Socket mPGA478 : Es compatible con Intel Pentium 4 (hasta 3,4Ghz) y procesadores Intel Celeron., Socket 479 : Se ha utilizado en equipos port??tiles con tecnolog??a Intel Centrino., Socket LGS775 : La versi??n ??ltima para procesadores Intel. Es compatible con Intel Core Duo., Socket A : Durante tiempo ha sido el usado para AMD Athlon, AMD Duron y Sempron., Socket 754 : El primer socket para el procesador AMD Athlon 64. Admite Sempron y Turion., Socket 939 : Formado por 939 pins, es compatible con AMD Athlon de 32 y 64 bits., Socktet940 : Admite los ??ltimos procesadores AMD Athlon de 64 Bits y de doble n??cleo.', correct: true },
      { text: 'Socket 462., Socket 754., Socket 939., Socket AM2+, Socket AM3+', correct: false },
      { text: 'Socket AM4., Socket FM2., Socket FM2+', correct: false },
      { text: 'Intel LGA 775: procesadores Pentium 4, Pentium D, Celeron, Celeron D, Pentium XE, Core 2 Duo, Core 2 Quad, Xeon., Intel LGA 1156: procesadores Core ix series 500, 600, 700 y 800; Pentium G6000 y Celeron G1000., Intel LGA 1155: procesadores Sandy Bridge, Ivy Bridge, Xeon E3 1200., Intel LGA 1150: procesadores Haswell, Haswell Refresh y Broadweell., Intel LGA 1151: procesadores Skylake, Kaby Lake y Coffee Lake., Intel LGA 1366: Core i7 serie 900, Xeon series 3500, 3600, 5500 y 5600., Intel LGA 2011: procesadores Sandy Bridge-E, Ivy Bridge-E, Xeon E5-2000 / 4000., Intel LGA 2011-v3: procesadores Haswell-E., Intel LGA 2066: procesadores Skylake-X y Kaby Lake-X.', correct: false }
    ]
  },
  {
    question: '??C??mo saber cu??l es mi socket?',
    answers: [
      { text: 'Nos vamos al ???administrador de tareas??? (Crtl + ALT + Supr), pinchamos en ???rendimiento???, ???memoria???.', correct: false },
      { text: 'Para ellos, vamos a dirigirnos a ark.intel.com y vamos a colocar en ???buscar especificaciones??? el procesador que queramos. A continuaci??n, pulsamos sobre ??l y directamente iremos a las especificaciones. Buscaremos ???Z??calos compatibles???, y ah?? tendremos la informaci??n que buscamos', correct: true },
      { text: 'Abre el cuadro de di??logo del comando Ejecutar (tecla Windows + tecla R), escribe msinfo32 y confirma presionando la tecla ???Aceptar???. Esto abrir?? la ventana de ???Informaci??n del Sistema???. ', correct: false },
      { text: 'Utilizar la l??nea de comandos de Windows que tambi??n existe como explic??bamos en un especial sobre esta herramienta. En Windows 7 podemos acceder mediante Inicio> Todos los programas> Accesorios> s??mbolo del sistema o tambi??n mediante la barra de b??squeda o archivos del men?? de inicio introduciendo ???cmd??? o ???s??mbolo del sistema', correct: false }
    ]
  },
  {
    question: '??Qu?? es un socket inteligente?',
    answers: [
      { text: 'El socket inteligente es un sistema electromec??nico de soporte y conexi??n el??ctrica, instalado en la placa base, que se usa para fijar y conectar un microprocesador', correct: false },
      { text: 'Los sockets inteligentes son dispositivos vers??tiles que nos permiten controlar cualquier aparato que conectamos a ellos: un router, el calentador, la calefacci??n... de modo que podamos encenderlos cuando los necesitemos, incluso cuando no estemos en casa', correct: true },
      { text: 'El socket inteligente es el punto final en una conexi??n, es decir, un dispositivo o elemento electr??nico que se genera gracias al sistema operativo y que permite el env??o e informaci??n de otros procesos que tambi??n hagan uso de estos.', correct: false },
      { text: 'Un socket inteligente es una estructura de datos que permite a dos dispositivos mantener una comunicaci??n. El websocket mantiene la comunicaci??n activa entre el navegador web de un usuario y el servidor web del sitio al que accede, mientras la pesta??a se encuentre activa.', correct: false },
    ]
  },
  {
    question: '??Qu?? es una interfaz socket?',
    answers: [
      { text: 'La conexi??n funcional entre dos sistemas, programas, dispositivos o componentes de cualquier tipo, que proporciona una comunicaci??n de distintos niveles, permitiendo el intercambio de informaci??n.', correct: false },
      { text: 'Es una API para redes TCP/IP que se compone de funciones o rutinas. Originalmente se construy?? a principios de los 80 para el sistema operativo UNIX', correct: true },
      { text: 'Dispositivo que convierte la se??al el??ctrica en digital para poder trabajarla en nuestro DAW.', correct: false },
      { text: 'Es el software espec??fico de red que se comunica con el controlador de dispositivo espec??fico de red y la capa IP a fin de proporcionar a la capa IP una interfaz coherente con todos los adaptadores de red que puedan estar presentes.', correct: false },
    ]
  },

  {
    question: '??Qu?? es un socket y cu??l es su funci??n?',
    answers: [
      { text: 'El socket de una placa base es el sitio donde se instala el procesador. Ya sea de AMD o Intel, proporciona el ??nico lugar donde se puede instalar un procesador en una placa base, y existen multitud de sockets diferentes. El socket de una placa base determina el tipo de procesador que puede instalarse, ya que este elemento no se puede modificar para hacerlo compatible con otros procesadores para los que no ha sido dise??ado.', correct: true },
      { text: 'Es un sistema operativo (o runtime) para contenedores. El motor se instala en cada servidor en el que desee ejecutar contenedores y proporciona un conjunto sencillo de comandos que puede utilizar para crear, iniciar o detener contenedores.', correct: false },
      { text: 'Es una herramienta que permite empaquetar una aplicaci??n y sus dependencias en un contenedor muy ligero.', correct: false },
      { text: 'El z??calo de CPU es un tipo de z??calo electr??nico instalado en la placa base, que se usa para fijar y conectar el microprocesador, sin soldarlo lo cual permite ser extra??do despu??s.', correct: false },
    ]
  },

  {
    question: '??C??mo crear un socket?',
    answers: [
      { text: 'Declare un objeto addrinfo que contenga una estructura sockaddr e inicialice estos valores. Para esta aplicaci??n, no se especifica la familia de direcciones de Internet para que se pueda devolver una direcci??n IPv6 o IPv4', correct: false },
      { text: 'Llame a la funci??n getaddrinfo que solicita la direcci??n IP para el nombre del servidor pasado en la l??nea de comandos. El puerto TCP en el servidor al que se conectar?? el cliente se define mediante DEFAULT_PORT como 27015', correct: false },
      { text: 'Para crear el socket de servidor, el endPoint objeto puede escuchar las conexiones entrantes en cualquier direcci??n IP, pero se debe especificar el n??mero de puerto. Una vez creado el socket, el servidor puede aceptar conexiones entrantes y comunicarse con los clientes.', correct: true },
      { text: 'Cree un objeto SOCKET denominado ConnectSocket.', correct: false },
    ]
  }, 

  {
    question: '??Qu?? son los servicios con sockets?',
    answers: [
      { text: 'Es un servidor ???programa o dispositivo???, que hace de intermediario en las peticiones de recursos que realiza un cliente a otro servidor.', correct: false },
      { text: 'Es un ordenador comprado o arrendado que se utiliza para prestar servicios dedicados, generalmente relacionados con el alojamiento web y otros servicios en red.', correct: false },
      { text: 'Es un conjunto de computadoras capaz de atender las peticiones de un cliente y devolverle una respuesta en concordancia.', correct: false },
      { text: 'Es un proceso o hilo existente en la m??quina cliente y en la m??quina servidora, que sirve en ??ltima instancia para que el programa servidor y el cliente lean y escriban la informaci??n', correct: true },
    ]
  },

  {
    question: '??Qu?? tipo de informaci??n se puede enviar y recibir entre la comunicaci??n con sockets?',
    answers: [
      { text: 'Se puede enviar archivos .txt, imagen.', correct: false },
      { text: 'Solamente archivos JSON', correct: false },
      { text: 'Archivos JSON, XML, CSV.', correct: false },
      { text: 'Se puede enviar archivos .txt, imagen y archivos correspondientes al paquete Office.', correct: true },
    ]
  },

  {
    question: '??C??mo funcionan los sockets con protocolo UDP?',
    answers: [
      { text: 'UDP establece una conexi??n entre un remitente y un receptor antes de que se puedan enviar los datos.', correct: false },
      { text: 'UDP b??sicamente coge un datagrama IP y le a??ade su propio encapsulado y cabecera para asegurar su correcto transporte. Obviamente interviene en la capa de transporte tanto de OSI', correct: false },
      { text: 'El protocolo UDP, que es un protocolo orientado a conexi??n. Esto implica que antes de transmitir informaci??n hay que establecer una conexi??n entre los dos sockets.', correct: false },
      { text: 'El protocolo UDP funciona sin conexi??n: el protocolo UDP se caracteriza porque permite el env??o de datagramas a trav??s de la red sin que se haya establecido previamente una conexi??n entre el emisor y el receptor.', correct: true },
    ]
  }
]