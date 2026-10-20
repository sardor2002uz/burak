console.log("Users frontend javascript file");

$(function () {
    $(".member-status").on("change", function (e) {
        const id = e.target.id,
            memberStatus = $(`#${id}.member-status`).val();

        // TODO: Axios updateChosenUser
        axios.post("/admin/user/edit", {
            _id: id,
            memberStatus: "BLOCK"
        })
            .then(response => {
                console.log("response:", response);
                const result = response.data;

                if (result.data) {
                    console.log("User updated!");
                    $(".member-status").blur();
                } else alert("Users update failed!");
            })
            .catch(err => {
                console.log(err);
                alert("USER update failed!");
            });
    });
});