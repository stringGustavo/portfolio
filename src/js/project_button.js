document.querySelectorAll('.button_projects').forEach( button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.button_projects').forEach( buttons => {
            buttons.classList.remove('active_button');
        });
        button.classList.add('active_button');
    });
});

document.querySelector('#project_1').addEventListener('click', () => {
    changeProject('.portfolio_project_1', '.portfolio_project_2');
});

document.querySelector('#project_2').addEventListener('click', () => {
    changeProject('.portfolio_project_2', '.portfolio_project_1');
});

function changeProject (firstProject, secondProject) {
    document.querySelector(firstProject).classList.remove('deact_project');
    document.querySelector(secondProject).classList.add('deact_project');
}