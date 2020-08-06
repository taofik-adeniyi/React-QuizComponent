import React, {Component} from 'react'

let quizData = require('../quiz_data.json')



class Questions extends Component {
    render() {
        return (
            <div class="card-body">
                <ul class="list-group">
                <li class="list-group-item"><button>Cras justo odio</button></li>
                <li class="list-group-item"><button>Cras justo odio</button></li>
                <li class="list-group-item"><button>Cras justo odio</button></li>
                <li class="list-group-item"><button>Cras justo odio</button></li>
                <li class="list-group-item"><button>Cras justo odio</button></li>
                </ul>
                
                <div>
                    <button type="button" className="btn btn-primary">
                        Previous Question
                    </button>

                    <button type="button" class="btn btn-primary">
                        Next Questions
                    </button>

                    <button type="button" class="btn btn-primary">
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}




export default Questions