$('.done').on('click', function (event) {
  event.preventDefault()
  const url = this.href
  const method = 'PUT'
  const data = 'done=true'
  $.ajax({ url, method, data })
    .done(() => {
      $(this).closest('tr').remove()
    })
})

$('.delete').on('click', function (event) {
  event.preventDefault()
  const url = this.href
  const method = 'DELETE'
  $.ajax({ url, method })
    .done(() => {
      $(this).closest('tr').remove()
      // $('.alert-warning').removeClass('hidden')
    })
})

$('.edit-title').on('click', function (event) {
  $(this).closest('div').find('.edit-title').addClass('hidden')
  $(this).closest('div').find('.edit').removeClass('hidden')
})

$('input.edit').on('keydown', function (e) {
  if (event.keyCode === 13) {
    const url = $(this).data('id')
    const method = 'PUT'
    const newTitle = $(this).val()
    const data = 'title=' + newTitle
    $.ajax({ url, method, data })
      .done(msg => {
        $(this).closest('div').find('.edit').addClass('hidden')
        $(this).closest('div').find('.edit-title').removeClass('hidden')
        $(this).closest('div').find('.edit-title span').text(newTitle)
      })
  }
})