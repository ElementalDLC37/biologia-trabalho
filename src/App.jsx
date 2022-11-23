import { useRef, useState } from 'react'
import { motion } from "framer-motion"
import { Canvas, useFrame } from '@react-three/fiber'
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { editable as e, SheetProvider } from '@theatre/r3f'
import Stomach from './components/organs/Stomatch'
import MemberContent from './components/MemberContent/Rui'
import Esophagus from './components/organs/Esophagus'
import Rui from './components/MemberContent/Rui'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Jordan from './components/MemberContent/Jordan'
import Kaue from './components/MemberContent/Kaue'
import Willian from './components/MemberContent/Willian'
import Renan from './components/MemberContent/Renan'
import Bruno from './components/MemberContent/Bruno'
import Koo from './components/organs/Koo'
import Grosso from './components/organs/Grosso'
import Small from './components/organs/Small'
import Far from './components/organs/Small copy'

const router = createBrowserRouter([
  {
    path: "/faringe",
    element: <Far position={[0, 0, 0]} />,
  },
  {
    path: "/estomago",
    element: <Stomach position={[0, 0, 0]} />,
  },
  {
    path: "/esofago",
    element: <Esophagus position={[0, 0, 0]} />,
  },
  {
    path: "/delgado",
    element: <Small position={[0, 0, 0]} />,
  },
  {
    path: "/grosso",
    element: <Grosso position={[0, 0, 0]} />,
  },
  {
    path: "/anus",
    element: <Koo position={[0, 0, 0]} />,
  },
]);

const r = createBrowserRouter([
  {
    path: "/faringe",
    element: <Kaue position={[0, 0, 0]} />,
  },
  {
    path: "/estomago",
    element: <Rui position={[0, 0, 0]} />,
  },
  {
    path: "/esofago",
    element: <Jordan position={[0, 0, 0]} />,
  },
  {
    path: "/delgado",
    element: <Willian position={[0, 0, 0]} />,
  },
  {
    path: "/grosso",
    element: <Renan position={[0, 0, 0]} />,
  },
  {
    path: "/anus",
    element: <Bruno position={[0, 0, 0]} />,
  },
]);


const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

if (import.meta.env.DEV) {
  studio.initialize()
  studio.extend(extension)
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <h1 id="current-part-title">{window.location.pathname.replace("/", "")}</h1>
      <Canvas id="canvas">
        <SheetProvider sheet={demoSheet}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <e.mesh theatreKey="Box">
            <RouterProvider router={router} />
          </e.mesh>
        </SheetProvider>
      </Canvas>
      <button id="button-open" onClick={() => { setIsOpen(true) }}>
        <span class="material-symbols-outlined" style={{ fontSize: "5vh" }}>search</span>
      </button>
      <ul id="select-content">
        <li className="select-content-list-item">
          <a href="/faringe" className="select-content-anchor">Boca</a>
        </li>
        <span class="material-symbols-outlined">arrow_forward</span>
        <li className="select-content-list-item">
          <a href="/esofago" className="select-content-anchor">Esôfago</a>
        </li>
        <span class="material-symbols-outlined">arrow_forward</span>
        <li className="select-content-list-item">
          <a href="/estomago" className="select-content-anchor">Estômago</a>
        </li>
        <span class="material-symbols-outlined">arrow_forward</span>
        <li className="select-content-list-item">
          <a href="/delgado" className="select-content-anchor">Intestino Delgado</a>
        </li>
        <span class="material-symbols-outlined">arrow_forward</span>
        <li className="select-content-list-item">
          <a href="/grosso" className="select-content-anchor">Intestino Grosso</a>
        </li>
        <span class="material-symbols-outlined">arrow_forward</span>
        <li className="select-content-list-item">
          <a href="/anus" className="select-content-anchor">Ânus</a>
        </li>
      </ul>
      {
        isOpen &&
        <motion.div id="presenting-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.0]
        }}
        >
          <button id="button-close" onClick={() => { setIsOpen(false) }}>
            <span class="material-symbols-outlined" style={{ fontSize: "5vh" }}>close</span>
          </button>
          <RouterProvider router={r} />
        </motion.div>
      }
    </>
  )
}




