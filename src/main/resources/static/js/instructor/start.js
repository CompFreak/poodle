/*
 * Copyright 2015 Westfälische Hochschule
 *
 * This file is part of Poodle.
 *
 * Poodle is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Poodle is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Poodle.  If not, see <http://www.gnu.org/licenses/>.
 */
$(document).ready(function() {
	"use strict";

	var $moreButton = $("#moreExercisesButton");
	var $hiddenExercises = $("#exercises > li:hidden");

	// hide "more..." button if all elements are already visible
	if ($hiddenExercises.length === 0)
		$moreButton.hide();

	// show all exercises on click on "more.."
	$moreButton.click(function() {
		$hiddenExercises.slideDown();
		$(this).hide();
	});
});