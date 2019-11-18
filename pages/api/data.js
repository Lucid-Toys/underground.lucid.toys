import fetch from "isomorphic-unfetch"
import { API_URL } from "../../utils/constants"

export default (request, result) => {
  fetch(API_URL)
    .then(response => response.json())
    .then(data =>
      result.json(
        data
          .sort((a, b) => {
            return a.name.localeCompare(b.name)
          })
          .sort((a, b) => {
            switch (a.lineStatuses[0].statusSeverityDescription) {
              case "Good Service":
                return 1
              case "Severe Delays":
              default:
                return -1
            }
          })
      )
    )
    .catch(error => console.error(error))
}
