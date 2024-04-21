import './App.css';
import split from './images/split.png';
import magnifier from './images/magnifier.png';
import replace from './images/replace.png';
import translate from './images/translate.png';
import Modal from 'react-modal';
import { useState } from 'react';

type modal = 'Break Sentence' | 'Detect Language' | 'Dictinary Lookup' | 'Translate';

function App() {
  const [modalVisibility, setModalVisibility] = useState(false)
  const [modalData, setModalData] = useState<modal>()

  return (
    <div className="App min-h-screen bg-slate-100">
      <div className='md:p-28 md:gap-y-16 md:gap-x-60 gap-10 py-16 mx-auto w-fit grid md:grid-cols-2 grid-cols-1 justify-items-center'>
        <Modal
          className='modal_popup absolute top-0 md:right-10 md:left-10 md:bottom-40 right-4 left-4 bottom-10 p-10 md:w-1/3 h-fit m-auto rounded-xl bg-slate-200 outline-slate-700'
          isOpen={modalVisibility}>
            <svg className='md:w-12 w-9 absolute right-3 top-3 cursor-pointer' onClick={()=> {setModalVisibility(false)}} enable-background="new 0 0 128 128" id="Layer_1" version="1.1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
              <g><g><path d="M84.815,43.399c-0.781-0.782-2.047-0.782-2.828,0L64.032,61.356L46.077,43.399c-0.781-0.782-2.047-0.782-2.828,0    c-0.781,0.781-0.781,2.047,0,2.828l17.955,17.957L43.249,82.141c-0.781,0.78-0.781,2.047,0,2.828    c0.391,0.39,0.902,0.585,1.414,0.585s1.023-0.195,1.414-0.585l17.955-17.956l17.955,17.956c0.391,0.39,0.902,0.585,1.414,0.585    s1.023-0.195,1.414-0.585c0.781-0.781,0.781-2.048,0-2.828L66.86,64.184l17.955-17.957C85.597,45.447,85.597,44.18,84.815,43.399z     M64.032,14.054c-27.642,0-50.129,22.487-50.129,50.127c0.002,27.643,22.491,50.131,50.133,50.131    c27.639,0,50.125-22.489,50.125-50.131C114.161,36.541,91.674,14.054,64.032,14.054z M64.036,110.313h-0.002    c-25.435,0-46.129-20.695-46.131-46.131c0-25.435,20.693-46.127,46.129-46.127s46.129,20.693,46.129,46.127    C110.161,89.617,89.47,110.313,64.036,110.313z"/></g></g></svg>
            
            <>
              {modalData === 'Break Sentence' &&
                <div className='flex flex-col md:gap-5 gap-3'>
                  <h1 className='md:text-4xl text-2xl font-bold text-center'>Split Sentences</h1>
                  <p className='md:text-xl text-base'>This will split the paragraph to its sentences. then return the sentences with their length.</p>
                  <div className='flex flex-col md:gap-1 gap-0.5'>
                    <p className='md:text-lg text-sm'>The following limitations apply:</p>
                    <li className='md:text-base text-xs'>The array can have at most 100 elements.</li> 
                    <li className='md:text-base text-xs'>The text value of an array element cannot exceed 10,000 characters including spaces.</li>
                    <li className='md:text-base text-xs'>The entire text included in the request cannot exceed 50,000 characters including spaces.</li>
                  </div>
                </div>}
            </>
            <>
              {modalData === 'Detect Language' &&
                <div className='flex flex-col md:gap-5 gap-3'>
                  <h1 className='md:text-4xl text-2xl font-bold text-center'>Detect Language</h1>
                  <p className='md:text-xl text-base'>This will show you the language of the given text.</p>
                  <div className='flex flex-col gap-1'>
                    <p className='md:text-lg text-sm'>The following limitations apply:</p>
                    <li className='md:text-base text-xs'>The array can have at most 100 elements.</li> 
                    <li className='md:text-base text-xs'>The text value of an array element cannot exceed 10,000 characters including spaces.</li>
                    <li className='md:text-base text-xs'>The entire text included in the request cannot exceed 50,000 characters including spaces.</li>
                  </div>
                </div>}
            </>
            <>
              {modalData === 'Dictinary Lookup' &&
                <div className='flex flex-col md:gap-5 gap-3'>
                  <h1 className='md:text-4xl text-2xl font-bold text-center'>Dictinary Lookup</h1>
                  <p className='md:text-xl text-base'>This will show the synonym of the given word in other languages.</p>
                  <div className='flex flex-col gap-1'>
                    <p className='md:text-lg text-sm'>The following limitations apply:</p>
                    <li className='md:text-base text-xs'>The array can have at most 10 elements.</li> 
                    <li className='md:text-base text-xs'>The text value of an array element cannot exceed 100 characters including spaces.</li>
                  </div>
                </div>}
            </>
            <>
              {modalData === 'Translate' &&
                <div className='flex flex-col md:gap-5 gap-3'>
                  <h1 className='md:text-4xl text-2xl font-bold text-center'>Translate</h1>
                  <p className='md:text-xl text-base'>This will translate your paragraph into specified language.</p>
                  <div className='flex flex-col gap-1'>
                    <p className='md:text-lg text-sm'>The following limitations apply:</p>
                    <li className='md:text-base text-xs'>The array can have at most 25 elements.</li> 
                    <li className='md:text-base text-xs'>The entire text included in the request cannot exceed 5,000 characters including spaces.</li>
                  </div>
                </div>}
            </>

        </Modal>
        <div className='grid_child_1 relative md:w-48 w-40 border-2 rounded-2xl md:p-3 p-1.5 md:justify-self-end
         cursor-pointer border-slate-300 bg-slate-300 hover:bg-slate-200 hover:border-slate-200'>
          <img className='md:w-24 w-20 mx-auto rounded-full md:my-4 my-1 md:p-3 p-2 bg-slate-400' src={split} alt="Break sentence" />
          <h2 className='md:text-lg font-bold text-base'>Break Sentences</h2>
          <svg className='absolute top-1.5 right-1.5 w-6 bg-slate-300 hover:bg-slate-200 rounded-full'
           onClick={()=> {
            setModalVisibility(true)
            setModalData('Break Sentence')
          }} 
           id="Layer_2" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g><path d="M16,0.5C7.45313,0.5,0.5,7.45313,0.5,16S7.45313,31.5,16,31.5S31.5,24.54688,31.5,16S24.54688,0.5,16,0.5z M16,28.5   C9.10742,28.5,3.5,22.89258,3.5,16S9.10742,3.5,16,3.5S28.5,9.10742,28.5,16S22.89258,28.5,16,28.5z"/>
            <path d="M16,11.10059c-0.82861,0-1.5,0.67188-1.5,1.5v11.07324c0,0.82813,0.67139,1.5,1.5,1.5s1.5-0.67188,1.5-1.5V12.60059   C17.5,11.77246,16.82861,11.10059,16,11.10059z"/>
            <path d="M16,6.82617c-0.82861,0-1.5,0.67188-1.5,1.5v0.00488c0,0.82813,0.67139,1.49805,1.5,1.49805s1.5-0.6748,1.5-1.50293   S16.82861,6.82617,16,6.82617z"/></g></svg>
        </div>
        
        <div className='grid_child_2 relative md:w-48 w-40 border-2 rounded-2xl md:p-3 p-1.5 md:justify-self-start
         cursor-pointer border-slate-300 bg-slate-300 hover:bg-slate-200 hover:border-slate-200'>
          <img className='md:w-24 w-20 mx-auto rounded-full md:my-4 my-1 md:p-3 p-2 bg-slate-400' src={magnifier} alt="Break sentence" />
          <h2 className='md:text-lg font-bold text-base'>Detect Language</h2>
          <svg className='absolute top-1.5 right-1.5 w-6 bg-slate-300 hover:bg-slate-200 rounded-full'
           onClick={()=> {
            setModalVisibility(true)
            setModalData('Detect Language')
          }} 
           id="Layer_2" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g><path d="M16,0.5C7.45313,0.5,0.5,7.45313,0.5,16S7.45313,31.5,16,31.5S31.5,24.54688,31.5,16S24.54688,0.5,16,0.5z M16,28.5   C9.10742,28.5,3.5,22.89258,3.5,16S9.10742,3.5,16,3.5S28.5,9.10742,28.5,16S22.89258,28.5,16,28.5z"/>
            <path d="M16,11.10059c-0.82861,0-1.5,0.67188-1.5,1.5v11.07324c0,0.82813,0.67139,1.5,1.5,1.5s1.5-0.67188,1.5-1.5V12.60059   C17.5,11.77246,16.82861,11.10059,16,11.10059z"/>
            <path d="M16,6.82617c-0.82861,0-1.5,0.67188-1.5,1.5v0.00488c0,0.82813,0.67139,1.49805,1.5,1.49805s1.5-0.6748,1.5-1.50293   S16.82861,6.82617,16,6.82617z"/></g></svg>
        </div>
        
        <div className='grid_child_3 relative md:w-48 w-40 border-2 rounded-2xl md:p-3 p-1.5 md:justify-self-end
         cursor-pointer border-slate-300 bg-slate-300 hover:bg-slate-200 hover:border-slate-200'>
          <img className='md:w-24 w-20 mx-auto rounded-full md:my-4 my-1 md:p-3 p-2 bg-slate-400' src={replace} alt="Break sentence" />
          <h2 className='md:text-lg font-bold text-base'>Dictionary Lookup</h2>
          <svg className='absolute top-1.5 right-1.5 w-6 bg-slate-300 hover:bg-slate-200 rounded-full'
           onClick={()=> {
            setModalVisibility(true)
            setModalData('Dictinary Lookup')
          }} 
           id="Layer_2" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g><path d="M16,0.5C7.45313,0.5,0.5,7.45313,0.5,16S7.45313,31.5,16,31.5S31.5,24.54688,31.5,16S24.54688,0.5,16,0.5z M16,28.5   C9.10742,28.5,3.5,22.89258,3.5,16S9.10742,3.5,16,3.5S28.5,9.10742,28.5,16S22.89258,28.5,16,28.5z"/>
            <path d="M16,11.10059c-0.82861,0-1.5,0.67188-1.5,1.5v11.07324c0,0.82813,0.67139,1.5,1.5,1.5s1.5-0.67188,1.5-1.5V12.60059   C17.5,11.77246,16.82861,11.10059,16,11.10059z"/>
            <path d="M16,6.82617c-0.82861,0-1.5,0.67188-1.5,1.5v0.00488c0,0.82813,0.67139,1.49805,1.5,1.49805s1.5-0.6748,1.5-1.50293   S16.82861,6.82617,16,6.82617z"/></g></svg>
        </div>
        
        <div className='grid_child_4 relative md:w-48 w-40 border-2 rounded-2xl md:p-3 p-1.5 md:justify-self-start
         cursor-pointer border-slate-300 bg-slate-300 hover:bg-slate-200 hover:border-slate-200'>
          <img className='md:w-24 w-20 mx-auto rounded-full md:my-4 my-1 md:p-3 p-2 bg-slate-400' src={translate} alt="Break sentence" />
          <h2 className='md:text-lg font-bold text-base'>Translate</h2>
          <svg className='absolute top-1.5 right-1.5 w-6 bg-slate-300 hover:bg-slate-200 rounded-full'
           onClick={()=> {
            setModalVisibility(true)
            setModalData('Translate')
          }} 
           id="Layer_2" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g><path d="M16,0.5C7.45313,0.5,0.5,7.45313,0.5,16S7.45313,31.5,16,31.5S31.5,24.54688,31.5,16S24.54688,0.5,16,0.5z M16,28.5   C9.10742,28.5,3.5,22.89258,3.5,16S9.10742,3.5,16,3.5S28.5,9.10742,28.5,16S22.89258,28.5,16,28.5z"/>
            <path d="M16,11.10059c-0.82861,0-1.5,0.67188-1.5,1.5v11.07324c0,0.82813,0.67139,1.5,1.5,1.5s1.5-0.67188,1.5-1.5V12.60059   C17.5,11.77246,16.82861,11.10059,16,11.10059z"/>
            <path d="M16,6.82617c-0.82861,0-1.5,0.67188-1.5,1.5v0.00488c0,0.82813,0.67139,1.49805,1.5,1.49805s1.5-0.6748,1.5-1.50293   S16.82861,6.82617,16,6.82617z"/></g></svg>
        </div>
      </div>
      <h1 className='md:absolute md:bottom-0 md:right-0 md:left-0 md:p-8 p-4 bg-slate-300 md:text-3xl text-xl font-bold'>Translator</h1>
    </div>
  );
}

export default App;
