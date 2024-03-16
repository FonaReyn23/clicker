let clicks = 0;

function add(){
    clicks++;
    document.getElementById('num').innerHTML = 'Сделано кликов: ' + clicks;

    switch (clicks) {
      case 100:
        alert('Ты молодец! Продолжай в том же духе');
        break;
          case 1000:
          alert('Не думал, что ты здесь задержишся на долго -_-');
          break;
            case 10000:
            alert('Вау я не думал, что ты дойдешь до этого.')
            break;
              case 10005:
              alert('Заканчивай уже');
              break;
    }
}
