setTimeout("$('.body').css('transform','translateY(0)');", 1e3),
	setTimeout("$('.main-desc').addClass('b-show')", 1500),
	setTimeout("$('body').addClass('add-scroll')", 3e3),
	setTimeout("$('html').addClass('add-scroll')", 3e3),
	$(".glow-button").on("click", function () {
		$(".comment-item").addClass("comment-item-show"),
			$(".glow-button").addClass("hide"),
			$(".shine-button").addClass("show");
	});
const OFFER = "«RHINOXX»";
let now = new Date(),
	mm = now.getMonth() + 1,
	day = now.getDate(),
	year = now.getFullYear(),
	date = day + "." + mm + "." + year;
const massange = [
	{
		m: "مرحبًا! اسمي أيمن محمود. أنا رئيس قسم المسالك البولية و مختص بالضعف الجنسي للرجال و  ممارس بخبرة تزيد عن 20 عامًا. ",
	},
	{
		m: "أقدم تشخيصًا مجانيًا لمساعدة الرجال على التخلص من الضعف الجنسي و التخلص من مشاكل ضعف الانتصاب  عبر الإنترنت و اقدم توصيات شخصية ضمن نطاق برنامج تطوير التشخيص  عن بعد . ",
	},
	{
		m: "إذا كنت قلقًا بشأن ضعف الإنتصاب ، أو الضعف الجنسي ، أو سرعة القذف  ، فهذا ليس حكمًا بالإعدام! أجب عن بعض الأسئلة وسنجد معًا حلاً لمشكلتك. ",
	},
	{
		m: '<p class="quest">هل تعاني من أي مشاكل صحية  مزمنة؟</p>',
	},
	{
		m: '<p class="quest"> متى بدأت تعاني من أعراض الضعف الجنسي؟  </p>',
	},
	{
		m: '<p class="quest">هل تعاني من التوتر أو القلق؟</p>',
	},
	{
		m: '<p class="quest">هل لديك أي أعراض أخرى مثل الإجهاد الجنسي أو ضعف الانتصاب؟</p>',
	},
	{
		m: '<p class="quest">كم عمرك؟</p>',
	},
	{
		m: '<p class="quest">هل تتناول الكحول أو تدخن؟</p>',
	},
	{
		m: '<p class="quest">هل سبق لك أن تعرضت لإصابة في منطقة الحوض أو الأعضاء التناسلية؟</p>',
	},
	{
		m: "شكرًا لك. أنت بالفعل تعاني من ضعف جنسي، لكنك قادر تمامًا على التخلص من هذه المشكلة بسهولة معي اليوم. السبب الرئيسي للضعف الجنسي هو عدم وصول الدم بشكل كافي إلى الأوعية الدموية في الأعضاء التناسلية.  ",
	},
	{
		m: "الضعف الجنسي هو مشكلة خبيثة. أولاً، يحدث عدم الراحة أثناء العلاقة الجنسية وتحدث مشاكل في الانتصاب و سرعة القذف ، ولكن بعد ذلك تتغلغل المشكلة بشكل أعمق.",
	},
	{
		m: "في المرحلة الأولية، المشكلة عمليًا لا تظهر نفسها. إن انخفاض مستوى القدرة الجنسية وصعوبة الحفاظ على الانتصاب هي العلامات الأولى للمشكلة في بدايتها. الشيء الأكثر أهمية هو عدم تأخير التعامل معه! العجز الجنسي هو النتيجة الأكثر ضررًا لهذه المشكلة. والأخطر من ذلك هو التأثير السلبي على الصحة النفسية والعلاقات الشخصية. ",
	},
	{
		m: "ولذلك فإن الضعف الجنسي يحمل عدة مخاطر بالنسبة للرجال في نفس الوقت، وأهمها التأثير على الثقة بالنفس والعلاقات الزوجية.",
	},
	{
		m: "علاوة على ذلك، فإن العجز الجنسي يحدث في نسبة كبيرة من الحالات، أي مع معظم الرجال المصابين بمشاكل جنسية. عند بعض الناس بشكل أسرع، وعند الآخرين في وقت لاحق، ولكن دائمًا.",
	},
	{
		m: "المشكلة هي أن معظم الرجال المصابين بهذه المشكلة  ببساطة لا يذهبون إلى المختص  للحصول على المساعدة. فمنهم من لا يعتبر هذه المشكلة  خطيرة و يستخدم المنشطات الكيميائية ، والبعض الآخر يعتبره مخزيًا. ونتيجة لذلك، لدينا موقف يتجاهل فيه المصاب المشكلة ببساطة. وإذا طلبوا المساعدة، فغالبًا ما يفعلون ذلك في تلك اللحظة عندما يكون الوضع قد تفاقم.",
	},
	{
		m: "لكن الآن لدى الرجال فرصة فريدة للتخلص من هذه المشكلة ، ودون إستخدام منشطات كيميائية ضارة . ",
	},
	{
		m: "حقيقة هي أنه في عام 2023 ظهر منتج ثوري يحسن وظيفة الأعضاء التناسلية، ويقضي عى  الضعف الجنسي، و يساعد على زيادة مدة العلاقة و المساعدة على التخلص من سرعة القذف ، كما يساعد على زيادة القدرة الجنسية ومدة الجماع بشكل كبير.",
	},
	{
		m: 'اسم هذا المنتج هو RHINOXX. وهو منتج تم تصنيعه بالجزائر  تم تصنيعه بمكونات تم إستيرادها من اوروبا و  شاركوا العديد من العلماء  أيضًا في تطويره. <br><br> <img src="images/product1.png" class="product-img" style="width: 100%; max-width: 240px;"> ',
	},
	{
		m: "يبدأ مفعول RHINOXX من اليوم الأول لاستخدامه.",
	},
	{
		m: "وكانت النتائج مفاجئة للغاية لأخصائيي المسالك البولية. ما يقرب من 98 ٪ من جميع المصابين يتخلصون من مشاكل الضعف الجنسي و سرعة القذف دون انتكاسات. الآخرين تخلصوا تمامًا من الأعراض وتخلصوا منها في وقت أسرع مما كانوا يتخيلوا . ",
	},
	{
		m: "تبلغ المدة المثالية لإستخدام هذا المكمل الغذائي ، والتي تأخذ في الاعتبار عمرك ومؤشر كتلة جسمك الحالي واسلوب حياتك ، في المتوسط حوالي 60 يومًا. ",
	},
	{
		m: "خلال هذه الفترة , سوف يتم تطهير الأوعية الدموية الخاصة بالجهاز البولي و الجهاز التناسلي للرجال و التخلص من مشكلة الضعف الجنسي بأمان و بطريقة طبيعية و بأمان عن طريق هذا المنتج  و تحسين عمل الوظيفة الجنسية لديك  .  ",
	},
	{
		m: "أيضاً لدي أخبار جيدة لك! أنت الشخص  رقم 500 الذي اشخصه عبر الإنترنت! ",
	},
	{
		m:
			"تستطيع ان تحصل علي  " +
			OFFER +
			"بالسعر الترويجي عن طريق إدخال اسمك ورقم هاتفك في نموذج الطلب أدناه. عدد العبوات بالسعر الترويجي محدودة ، لذا أنصحك بالإسراع في طلبك. ",
	},
];
var mass_id = 0,
	length_mass = 0,
	lengt_num_mas = 0,
	text = "",
	speedtext = 45,
	process = !0;

function app() {
	var e = new Date(),
		s = ("0" + e.getMinutes()).slice(-2),
		t = ("0" + e.getHours()).slice(-2) + ":" + s;
	if ($(".chat").height() + 100 > $(".content").height()) {
		$("#scroll_id").removeClass("hide");
		var n = $(".inp").val();
		$(".inp").val(++n);
	}
	const c =
		'<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' +
		t +
		'</p><p class="text" id="mass' +
		mass_id +
		'"></p></div></div></div>';
	$(".chat-content-list").append(c),
		"0" == document.getElementById("res").value
			? $("#scroll_id").addClass("aba")
			: $("#scroll_id").removeClass("aba");
}

function myMassange(e) {
	var s = new Date(),
		t = ("0" + s.getMinutes()).slice(-2);
	let n =
		'<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="message-time" id="time">' +
		(("0" + s.getHours()).slice(-2) + ":" + t) +
		'</p><p class="text" class="users_mass">' +
		e +
		"</p></div></div></div>";
	$(".chat-content-list").append(n),
		$(".content").animate(
			{
				scrollTop: $(".chat-content-list").height(),
			},
			700
		),
		$("#scroll_id").addClass("hide");
}

function question1() {
	$(".chat-content-list").append(
		'<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">   نعم، داء السكري.</span></div><div class="chat-content-buttons-gender-block"><span class="question1W"> نعم، ارتفاع ضغط الدم</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">لا، لا أعاني من مشاكل صحية  مزمنةا</span></div></div>'
	);
}

function choise1() {
	$(".question1M").click(() => {
		(document.querySelector(".chat-content-buttons-gender").style.display =
			"none"),
			myMassange("نعم، داء السكري."),
			setTimeout(() => {
				process = !0;
			}, 500);
	}),
		$(".question1W").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange(" نعم، ارتفاع ضغط الدم"),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$(".question1P").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange("لا، لا أعاني من مشاكل صحية مزمنة"),
				setTimeout(() => {
					process = !0;
				}, 500);
		});
}

function question2() {
	$(".chat-content-list").append(
		'<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">منذ بضعة أسابيع.</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">منذ بضعة أشهر.</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">منذ عدة سنوات</span></div></div>'
	);
}

function choise2() {
	$(".question2M").click(() => {
		(document.querySelector(".chat-content-buttons-gender").style.display =
			"none"),
			myMassange("منذ بضعة أسابيع."),
			$(".chat-content-buttons-gender").css("display", "none"),
			setTimeout(() => {
				process = !0;
			}, 500);
	}),
		$(".question2W").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange("منذ بضعة أشهر."),
				$(".chat-content-buttons-gender").css("display", "none"),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$(".question2P").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange("منذ عدة سنوات "),
				$(".chat-content-buttons-gender").css("display", "none"),
				setTimeout(() => {
					process = !0;
				}, 500);
		});
}

function question3() {
	$(".chat-content-list").append(
		'<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">نعم، بشكل دائم</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">أحيانًا، في بعض المواقف. </span></div><div class="chat-content-buttons-gender-block"><span class="question3P"> لا، لا أعاني من التوتر أو القلق.  </span></div></div>'
	);
}

function choise3() {
	$(".question3M").click(() => {
		(document.querySelector(".chat-content-buttons-gender").style.display =
			"none"),
			myMassange("نعم، بشكل دائم"),
			$(".chat-content-buttons-gender").css("display", "none"),
			setTimeout(() => {
				process = !0;
			}, 500);
	}),
		$(".question3W").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange("أحيانًا، في بعض المواقف. "),
				$(".chat-content-buttons-gender").css("display", "none"),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$(".question3P").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange(" لا، لا أعاني من التوتر أو القلق.  "),
				$(".chat-content-buttons-gender").css("display", "none"),
				setTimeout(() => {
					process = !0;
				}, 500);
		});
}

function question4() {
	$(".chat-content-list").append(
		'<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">نعم، لدي أعراض إضافية مثل الإجهاد الجنسي.</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">نعم، لكن لا يوجد ضعف في الانتصاب.</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">لا، ليس لدي أي أعراض إضافية. </span></div></div>'
	);
}

function choise4() {
	$(".question4M").click(() => {
		(document.querySelector(".chat-content-buttons-gender").style.display =
			"none"),
			myMassange("نعم، لدي أعراض إضافية مثل الإجهاد الجنسي."),
			$(".chat-content-buttons-gender").css("display", "none"),
			setTimeout(() => {
				process = !0;
			}, 500);
	}),
		$(".question4W").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange("نعم، لكن لا يوجد ضعف في الانتصاب."),
				$(".chat-content-buttons-gender").css("display", "none"),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$(".question4P").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange("لا، ليس لدي أي أعراض إضافية. "),
				$(".chat-content-buttons-gender").css("display", "none"),
				setTimeout(() => {
					process = !0;
				}, 500);
		});
}

function question5() {
	$(".chat-content-list").append(
		'<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">أقل من 20 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">من 20 - 30 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">من 31 - 40 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5T">من 41 - 50 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5G">أكثر من 50 عاماً</span></div></div>'
	);
}

function choise5() {
	$(".question5M").click(() => {
		(document.querySelector(".chat-content-buttons-gender").style.display =
			"none"),
			myMassange("أقل من 20 عاماً"),
			$(".chat-content-buttons-gender").css("display", "none"),
			setTimeout(() => {
				process = !0;
			}, 500);
	}),
		$(".question5W").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange("من 20 - 30 عاماً"),
				$(".chat-content-buttons-gender").css("display", "none"),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$(".question5P").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange("من 31 - 40 عاماً"),
				$(".chat-content-buttons-gender").css("display", "none"),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$(".question5T").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange("من 41 - 50 عاماً"),
				$(".chat-content-buttons-gender").css("display", "none"),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$(".question5G").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange("أكثر من 50 عاماً"),
				$(".chat-content-buttons-gender").css("display", "none"),
				setTimeout(() => {
					process = !0;
				}, 500);
		});
}

function question6() {
	$(".chat-content-list").append(
		'<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">نعم، بانتظام.</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">نعم، ولكن بشكل غير منتظم</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">لا، لا أتناول الكحول أو أدخن.</span></div></div>'
	);
}

function choise6() {
	$(".question6M").click(() => {
		(document.querySelector(".chat-content-buttons-gender").style.display =
			"none"),
			myMassange("نعم، بانتظام."),
			$(".chat-content-buttons-gender").css("display", "none"),
			setTimeout(() => {
				process = !0;
			}, 500);
	}),
		$(".question6W").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange("نعم، ولكن بشكل غير منتظم"),
				$(".chat-content-buttons-gender").css("display", "none"),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$(".question6P").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange("لا، لا أتناول الكحول أو أدخن."),
				$(".chat-content-buttons-gender").css("display", "none"),
				setTimeout(() => {
					process = !0;
				}, 500);
		});
}

function question7() {
	$(".chat-content-list").append(
		'<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">نعم، تعرضت لإصابة خطيرة.</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">نعم، تعرضت لإصابة طفيفة.</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">لا، لم أتعرض لأي إصابة.</span></div></div>'
	);
}

function choise7() {
	$(".question7M").click(() => {
		(document.querySelector(".chat-content-buttons-gender").style.display =
			"none"),
			myMassange("نعم، تعرضت لإصابة خطيرة."),
			$(".chat-content-buttons-gender").css("display", "none"),
			setTimeout(() => {
				process = !0;
			}, 500);
	}),
		$(".question7W").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange("نعم، تعرضت لإصابة طفيفة."),
				$(".chat-content-buttons-gender").css("display", "none"),
				setTimeout(() => {
					process = !0;
				}, 500);
		}),
		$(".question7P").click(() => {
			(document.querySelector(".chat-content-buttons-gender").style.display =
				"none"),
				myMassange("لا، لم أتعرض لأي إصابة."),
				$(".chat-content-buttons-gender").css("display", "none"),
				setTimeout(() => {
					process = !0;
				}, 500);
		});
}
setTimeout(() => {
	var e = new Date(),
		s = ("0" + e.getMinutes()).slice(-2);
	const t =
		'<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' +
		(("0" + e.getHours()).slice(-2) + ":" + s) +
		'</p><p class="text" id="mass' +
		mass_id +
		'"></p></div></div></div>';
	$(".chat-content-list").append(t),
		$("#scroll_id").click(function (e) {
			$(this).removeClass("hide-q"),
				$(".content").animate(
					{
						scrollTop: $(".chat").height(),
					},
					700
				);
		});
	const n = setInterval(function () {
		if (1 == process)
			if (lengt_num_mas != massange.length) {
				if (
					((text += massange[lengt_num_mas].m[length_mass]),
					length_mass++,
					$("#mass" + lengt_num_mas).html(text),
					3 === lengt_num_mas &&
						length_mass === massange[lengt_num_mas].m.length - 1 &&
						(question1(),
						(process = !1),
						choise1(),
						$("#scroll_id").addClass("hide-q"),
						$(".content").animate(
							{
								scrollTop: $(".chat").height(),
							},
							700
						),
						$("#scroll_id").removeClass("hide-q")),
					4 === lengt_num_mas &&
						length_mass === massange[lengt_num_mas].m.length - 1 &&
						(question2(),
						(process = !1),
						choise2(),
						$("#scroll_id").addClass("hide-q"),
						$(".content").animate(
							{
								scrollTop: $(".chat").height(),
							},
							700
						),
						$("#scroll_id").removeClass("hide-q")),
					5 === lengt_num_mas &&
						length_mass === massange[lengt_num_mas].m.length - 1 &&
						(question3(),
						(process = !1),
						choise3(),
						$("#scroll_id").addClass("hide-q"),
						$(".content").animate(
							{
								scrollTop: $(".chat").height(),
							},
							700
						),
						$("#scroll_id").removeClass("hide-q")),
					6 === lengt_num_mas &&
						length_mass === massange[lengt_num_mas].m.length - 1 &&
						(question4(),
						(process = !1),
						choise4(),
						$("#scroll_id").addClass("hide-q"),
						$(".content").animate(
							{
								scrollTop: $(".chat").height(),
							},
							700
						),
						$("#scroll_id").removeClass("hide-q")),
					7 === lengt_num_mas &&
						length_mass === massange[lengt_num_mas].m.length - 1 &&
						(question5(),
						(process = !1),
						choise5(),
						$("#scroll_id").addClass("hide-q"),
						$(".content").animate(
							{
								scrollTop: $(".chat").height(),
							},
							700
						),
						$("#scroll_id").removeClass("hide-q")),
					8 === lengt_num_mas &&
						length_mass === massange[lengt_num_mas].m.length - 1 &&
						(question6(),
						(process = !1),
						choise6(),
						$("#scroll_id").addClass("hide-q"),
						$(".content").animate(
							{
								scrollTop: $(".chat").height(),
							},
							700
						),
						$("#scroll_id").removeClass("hide-q")),
					9 === lengt_num_mas &&
						length_mass === massange[lengt_num_mas].m.length - 1 &&
						(question7(),
						(process = !1),
						choise7(),
						$("#scroll_id").addClass("hide-q"),
						$(".content").animate(
							{
								scrollTop: $(".chat").height(),
							},
							700
						),
						$("#scroll_id").removeClass("hide-q")),
					length_mass == massange[lengt_num_mas].m.length)
				) {
					lengt_num_mas++, mass_id++, (length_mass = 0), (text = ""), app();
				}
			} else
				clearInterval(n),
					$("#mass" + lengt_num_mas)
						.parent()
						.parent()
						.css("display", "none"),
					$(".iframe-form").addClass("show"),
					$(".btn-top").addClass("show"),
					$(".reviews").removeClass("hide");
	}, speedtext);
}, 1e3),
	$(".content").scroll(function () {
		"0" == document.getElementById("res").value
			? $("#scroll_id").addClass("aba")
			: $("#scroll_id").removeClass("aba");
	});
var $marker = $("#down-box");
$(".content").scroll(function () {
	$(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100
		? ((document.getElementById("res").value = "0"),
		  $("#scroll_id").addClass("hide"))
		: $("#scroll_id").removeClass("hide");
});
