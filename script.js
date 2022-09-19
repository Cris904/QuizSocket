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
    question: '¿Cuáles son los tipos de socket?',
    answers: [
      { text: 'Socket 423 : Es el zócalo que usaba para las primeras versiones de Pentium 4, Socket mPGA478 : Es compatible con Intel Pentium 4 (hasta 3,4Ghz) y procesadores Intel Celeron., Socket 479 : Se ha utilizado en equipos portátiles con tecnología Intel Centrino., Socket LGS775 : La versión última para procesadores Intel. Es compatible con Intel Core Duo., Socket A : Durante tiempo ha sido el usado para AMD Athlon, AMD Duron y Sempron., Socket 754 : El primer socket para el procesador AMD Athlon 64. Admite Sempron y Turion., Socket 939 : Formado por 939 pins, es compatible con AMD Athlon de 32 y 64 bits., Socktet940 : Admite los últimos procesadores AMD Athlon de 64 Bits y de doble núcleo.', correct: true },
      { text: 'Socket 462., Socket 754., Socket 939., Socket AM2+, Socket AM3+', correct: false },
      { text: 'Socket AM4., Socket FM2., Socket FM2+', correct: false },
      { text: 'Intel LGA 775: procesadores Pentium 4, Pentium D, Celeron, Celeron D, Pentium XE, Core 2 Duo, Core 2 Quad, Xeon., Intel LGA 1156: procesadores Core ix series 500, 600, 700 y 800; Pentium G6000 y Celeron G1000., Intel LGA 1155: procesadores Sandy Bridge, Ivy Bridge, Xeon E3 1200., Intel LGA 1150: procesadores Haswell, Haswell Refresh y Broadweell., Intel LGA 1151: procesadores Skylake, Kaby Lake y Coffee Lake., Intel LGA 1366: Core i7 serie 900, Xeon series 3500, 3600, 5500 y 5600., Intel LGA 2011: procesadores Sandy Bridge-E, Ivy Bridge-E, Xeon E5-2000 / 4000., Intel LGA 2011-v3: procesadores Haswell-E., Intel LGA 2066: procesadores Skylake-X y Kaby Lake-X.', correct: false }
    ]
  },
  {
    question: '¿Cómo saber cuál es mi socket?',
    answers: [
      { text: 'Nos vamos al “administrador de tareas” (Crtl + ALT + Supr), pinchamos en “rendimiento”, “memoria”.', correct: false },
      { text: 'Para ellos, vamos a dirigirnos a ark.intel.com y vamos a colocar en “buscar especificaciones” el procesador que queramos. A continuación, pulsamos sobre él y directamente iremos a las especificaciones. Buscaremos “Zócalos compatibles”, y ahí tendremos la información que buscamos', correct: true },
      { text: 'Abre el cuadro de diálogo del comando Ejecutar (tecla Windows + tecla R), escribe msinfo32 y confirma presionando la tecla “Aceptar”. Esto abrirá la ventana de “Información del Sistema”. ', correct: false },
      { text: 'Utilizar la línea de comandos de Windows que también existe como explicábamos en un especial sobre esta herramienta. En Windows 7 podemos acceder mediante Inicio> Todos los programas> Accesorios> símbolo del sistema o también mediante la barra de búsqueda o archivos del menú de inicio introduciendo “cmd” o “símbolo del sistema', correct: false }
    ]
  },
  {
    question: '¿Qué es un socket inteligente?',
    answers: [
      { text: 'El socket inteligente es un sistema electromecánico de soporte y conexión eléctrica, instalado en la placa base, que se usa para fijar y conectar un microprocesador', correct: false },
      { text: 'Los sockets inteligentes son dispositivos versátiles que nos permiten controlar cualquier aparato que conectamos a ellos: un router, el calentador, la calefacción... de modo que podamos encenderlos cuando los necesitemos, incluso cuando no estemos en casa', correct: true },
      { text: 'El socket inteligente es el punto final en una conexión, es decir, un dispositivo o elemento electrónico que se genera gracias al sistema operativo y que permite el envío e información de otros procesos que también hagan uso de estos.', correct: false },
      { text: 'Un socket inteligente es una estructura de datos que permite a dos dispositivos mantener una comunicación. El websocket mantiene la comunicación activa entre el navegador web de un usuario y el servidor web del sitio al que accede, mientras la pestaña se encuentre activa.', correct: false },
    ]
  },
  {
    question: '¿Qué es una interfaz socket?',
    answers: [
      { text: 'La conexión funcional entre dos sistemas, programas, dispositivos o componentes de cualquier tipo, que proporciona una comunicación de distintos niveles, permitiendo el intercambio de información.', correct: false },
      { text: 'Es una API para redes TCP/IP que se compone de funciones o rutinas. Originalmente se construyó a principios de los 80 para el sistema operativo UNIX', correct: true },
      { text: 'Dispositivo que convierte la señal eléctrica en digital para poder trabajarla en nuestro DAW.', correct: false },
      { text: 'Es el software específico de red que se comunica con el controlador de dispositivo específico de red y la capa IP a fin de proporcionar a la capa IP una interfaz coherente con todos los adaptadores de red que puedan estar presentes.', correct: false },
    ]
  },

  {
    question: '¿Qué es un socket y cuál es su función?',
    answers: [
      { text: 'El socket de una placa base es el sitio donde se instala el procesador. Ya sea de AMD o Intel, proporciona el único lugar donde se puede instalar un procesador en una placa base, y existen multitud de sockets diferentes. El socket de una placa base determina el tipo de procesador que puede instalarse, ya que este elemento no se puede modificar para hacerlo compatible con otros procesadores para los que no ha sido diseñado.', correct: true },
      { text: 'Es un sistema operativo (o runtime) para contenedores. El motor se instala en cada servidor en el que desee ejecutar contenedores y proporciona un conjunto sencillo de comandos que puede utilizar para crear, iniciar o detener contenedores.', correct: false },
      { text: 'Es una herramienta que permite empaquetar una aplicación y sus dependencias en un contenedor muy ligero.', correct: false },
      { text: 'El zócalo de CPU es un tipo de zócalo electrónico instalado en la placa base, que se usa para fijar y conectar el microprocesador, sin soldarlo lo cual permite ser extraído después.', correct: false },
    ]
  },

  {
    question: '¿Cómo crear un socket?',
    answers: [
      { text: 'Declare un objeto addrinfo que contenga una estructura sockaddr e inicialice estos valores. Para esta aplicación, no se especifica la familia de direcciones de Internet para que se pueda devolver una dirección IPv6 o IPv4', correct: false },
      { text: 'Llame a la función getaddrinfo que solicita la dirección IP para el nombre del servidor pasado en la línea de comandos. El puerto TCP en el servidor al que se conectará el cliente se define mediante DEFAULT_PORT como 27015', correct: false },
      { text: 'Para crear el socket de servidor, el endPoint objeto puede escuchar las conexiones entrantes en cualquier dirección IP, pero se debe especificar el número de puerto. Una vez creado el socket, el servidor puede aceptar conexiones entrantes y comunicarse con los clientes.', correct: true },
      { text: 'Cree un objeto SOCKET denominado ConnectSocket.', correct: false },
    ]
  }, 

  {
    question: '¿Qué son los servicios con sockets?',
    answers: [
      { text: 'Es un servidor —programa o dispositivo—, que hace de intermediario en las peticiones de recursos que realiza un cliente a otro servidor.', correct: false },
      { text: 'Es un ordenador comprado o arrendado que se utiliza para prestar servicios dedicados, generalmente relacionados con el alojamiento web y otros servicios en red.', correct: false },
      { text: 'Es un conjunto de computadoras capaz de atender las peticiones de un cliente y devolverle una respuesta en concordancia.', correct: false },
      { text: 'Es un proceso o hilo existente en la máquina cliente y en la máquina servidora, que sirve en última instancia para que el programa servidor y el cliente lean y escriban la información', correct: true },
    ]
  },

  {
    question: '¿Qué tipo de información se puede enviar y recibir entre la comunicación con sockets?',
    answers: [
      { text: 'Se puede enviar archivos .txt, imagen.', correct: false },
      { text: 'Solamente archivos JSON', correct: false },
      { text: 'Archivos JSON, XML, CSV.', correct: false },
      { text: 'Se puede enviar archivos .txt, imagen y archivos correspondientes al paquete Office.', correct: true },
    ]
  },

  {
    question: '¿Cómo funcionan los sockets con protocolo UDP?',
    answers: [
      { text: 'UDP establece una conexión entre un remitente y un receptor antes de que se puedan enviar los datos.', correct: false },
      { text: 'UDP básicamente coge un datagrama IP y le añade su propio encapsulado y cabecera para asegurar su correcto transporte. Obviamente interviene en la capa de transporte tanto de OSI', correct: false },
      { text: 'El protocolo UDP, que es un protocolo orientado a conexión. Esto implica que antes de transmitir información hay que establecer una conexión entre los dos sockets.', correct: false },
      { text: 'El protocolo UDP funciona sin conexión: el protocolo UDP se caracteriza porque permite el envío de datagramas a través de la red sin que se haya establecido previamente una conexión entre el emisor y el receptor.', correct: true },
    ]
  }
]