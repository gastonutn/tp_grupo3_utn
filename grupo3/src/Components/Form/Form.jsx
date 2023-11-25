import './Form.css'
export default function Form() {
    return (
        <div className='div-form'>
            <form class="form">

                <div class="flex">
                    <label>
                        <input required="" placeholder="" type="text" class="input" />
                        <span>Nombre</span>
                    </label>

                    <label>
                        <input required="" placeholder="" type="text" class="input" />
                        <span>Apellido</span>
                    </label>
                </div>

                <label>
                    <input required="" placeholder="" type="email" class="input" />
                    <span>email</span>
                </label>

                <label>
                    <input required="" type="tel" placeholder="" class="input" />
                    <span>Numero de contacto</span>
                </label>
                <label>
                    <textarea required="" rows="3" placeholder="" class="input01"></textarea>
                    <span>Mensaje</span>
                </label>

                <button class="fancy" href="#">
                    <span class="top-key"></span>
                    <span class="text">Enviar</span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                </button>
            </form>
        </div>
    )
}