import './ActionBar.css'
import { FaPrint, FaInfo, FaShareAlt } from "react-icons/fa";


function ActionBar() {
    return (
        <section className='ActionBar'>
            <section className='ActionBar_buttons'>
                <button>
                    <FaPrint />
                </button>
                <button>
                    <FaInfo />
                </button>
                <button>
                    <FaShareAlt />
                </button>
            </section>
            <section className='ActionBar_search'>
                Search
                <input type="text" name="searchbar" id="searchbar" />
            </section>
        </section>
    );
}

export default ActionBar;