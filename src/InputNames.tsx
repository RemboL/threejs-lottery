import { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import './InputNames.css';

export interface InputNamesProps {
    inputNames: (names: string[]) => void;
}

export default function InputNames(props: InputNamesProps) {
    const [namesAsString, setNamesAsString] = useState('');

    const names = namesAsString
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

    return <>
        <div className='modal show' style={{ display: 'block', position: 'initial' }}>
            <Modal.Dialog contentClassName='input-names-content'>
                <Modal.Header>
                    <Modal.Title>Enter names</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <textarea
                            className='names-textarea'
                            value={namesAsString}
                            onChange={(e) => {setNamesAsString(e.target.value)}}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary" disabled={names.length === 0} onClick={() => props.inputNames(names)}>Submit</button>
                </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>;
}