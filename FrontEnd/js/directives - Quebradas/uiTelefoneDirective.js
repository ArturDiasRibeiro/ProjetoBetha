angular.module("ProjetoBethaFrontEnd").directive("uiTelefone", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            let _formatarTelefone = function (telefone) {
                telefone = telefone.replace(/[^0-9]+/g, "")
                if (telefone.length > 2) {
                    telefone = "(" + telefone.substring(0, 2) + ")" + telefone.substring(2)
                }
                
                    return telefone
            }
            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatarTelefone(ctrl.viewValue))
                ctrl.$render()
            })
        }
    }
})