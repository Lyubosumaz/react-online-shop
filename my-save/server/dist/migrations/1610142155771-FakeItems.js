"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeItems1610142155771 = void 0;
class FakeItems1610142155771 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
      insert into item (title, description, "creatorId", "createdAt") values ('Travellers and Magicians', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2020-02-24T20:35:52Z');
insert into item (title, description, "creatorId", "createdAt") values ('Great Gatsby, The', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-02-14T11:48:36Z');
insert into item (title, description, "creatorId", "createdAt") values ('True Confessions', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2020-07-30T22:46:47Z');
insert into item (title, description, "creatorId", "createdAt") values ('Cat and the Canary, The', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-02-10T14:48:11Z');
insert into item (title, description, "creatorId", "createdAt") values ('September Dawn', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2020-03-28T05:38:28Z');
insert into item (title, description, "creatorId", "createdAt") values ('Diamond Girl', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-11-14T03:58:54Z');
insert into item (title, description, "creatorId", "createdAt") values ('Last Chance: Diary of Comedians, The (Bokutachi no koukan nikki)', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2020-03-19T11:32:35Z');
insert into item (title, description, "creatorId", "createdAt") values ('Doctor Takes a Wife, The', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2020-03-27T14:08:25Z');
insert into item (title, description, "creatorId", "createdAt") values ('Dames', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2020-10-28T09:34:01Z');
insert into item (title, description, "creatorId", "createdAt") values ('Artemisia', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2020-06-15T14:16:54Z');
insert into item (title, description, "creatorId", "createdAt") values ('Hard Way, The', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2020-02-13T12:08:59Z');
insert into item (title, description, "creatorId", "createdAt") values ('Place Promised in Our Early Days, The (Kumo no mukô, yakusoku no basho)', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2020-05-29T04:45:24Z');
insert into item (title, description, "creatorId", "createdAt") values ('Until the Light Takes Us', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-12-02T16:00:34Z');
insert into item (title, description, "creatorId", "createdAt") values ('Blackout', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2020-06-20T07:04:27Z');
insert into item (title, description, "creatorId", "createdAt") values ('Adventures of Buckaroo Banzai Across the 8th Dimension, The', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-02-23T03:00:52Z');
insert into item (title, description, "creatorId", "createdAt") values ('Paz!', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1, '2020-07-05T01:28:34Z');
insert into item (title, description, "creatorId", "createdAt") values ('Evilspeak', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2020-04-28T16:45:11Z');
insert into item (title, description, "creatorId", "createdAt") values ('So Big!', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2020-07-03T02:42:45Z');
insert into item (title, description, "creatorId", "createdAt") values ('Merlin', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2020-01-31T06:07:43Z');
insert into item (title, description, "creatorId", "createdAt") values ('Borgman', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2020-08-24T18:36:29Z');
insert into item (title, description, "creatorId", "createdAt") values ('Less Than Zero', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2020-09-23T19:26:38Z');
insert into item (title, description, "creatorId", "createdAt") values ('Next Stop Wonderland', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2020-05-17T08:25:37Z');
insert into item (title, description, "creatorId", "createdAt") values ('Happy Feet Two', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1, '2020-10-16T04:44:45Z');
insert into item (title, description, "creatorId", "createdAt") values ('Stockholm Stories', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2020-01-18T08:44:04Z');
insert into item (title, description, "creatorId", "createdAt") values ('Taking of Pelham One Two Three, The', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2020-05-21T15:30:05Z');
insert into item (title, description, "creatorId", "createdAt") values ('1900 (Novecento)', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-08-28T02:06:32Z');
insert into item (title, description, "creatorId", "createdAt") values ('Thirty-Two Short Films About Glenn Gould', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1, '2020-02-29T06:46:21Z');
insert into item (title, description, "creatorId", "createdAt") values ('Me & Isaac Newton', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2020-04-07T04:51:50Z');
insert into item (title, description, "creatorId", "createdAt") values ('Standing Still', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2020-04-04T20:16:27Z');
insert into item (title, description, "creatorId", "createdAt") values ('Hatchet II', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2020-04-11T06:32:10Z');
insert into item (title, description, "creatorId", "createdAt") values ('Journey for Margaret', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-08-28T06:55:54Z');
insert into item (title, description, "creatorId", "createdAt") values ('Claymation Christmas Celebration, A', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2020-10-13T17:48:30Z');
insert into item (title, description, "creatorId", "createdAt") values ('Between Strangers', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2020-02-01T14:38:19Z');
insert into item (title, description, "creatorId", "createdAt") values ('Tulpan', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2020-09-03T09:06:12Z');
insert into item (title, description, "creatorId", "createdAt") values ('Fourth State, The (Die vierte Macht)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2020-09-25T10:13:50Z');
insert into item (title, description, "creatorId", "createdAt") values ('Latcho Drom', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2020-11-23T16:17:09Z');
insert into item (title, description, "creatorId", "createdAt") values ('Magnificent Ambersons, The', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2020-02-26T10:52:49Z');
insert into item (title, description, "creatorId", "createdAt") values ('Neurons to Nirvana', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-03-26T13:40:50Z');
insert into item (title, description, "creatorId", "createdAt") values ('Big Day, The (We Met on the Vineyard)', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-06-30T04:24:15Z');
insert into item (title, description, "creatorId", "createdAt") values ('Elizabethtown', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2020-01-15T07:37:26Z');
insert into item (title, description, "creatorId", "createdAt") values ('7 Dollars on the Red (Sette dollari sul rosso)', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2020-02-07T16:05:05Z');
insert into item (title, description, "creatorId", "createdAt") values ('Run If You Can', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-10-16T19:25:22Z');
insert into item (title, description, "creatorId", "createdAt") values ('War', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2020-08-14T02:47:01Z');
insert into item (title, description, "creatorId", "createdAt") values ('Tideland', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-12-07T11:45:12Z');
insert into item (title, description, "creatorId", "createdAt") values ('Two Loves', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2020-03-22T05:00:35Z');
insert into item (title, description, "creatorId", "createdAt") values ('Phil Spector', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2020-06-20T23:38:04Z');
insert into item (title, description, "creatorId", "createdAt") values ('Becky Sharp', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-07-16T18:56:54Z');
insert into item (title, description, "creatorId", "createdAt") values ('Grey Fox, The', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2020-02-12T03:08:21Z');
insert into item (title, description, "creatorId", "createdAt") values ('Goodbye, Dragon Inn (Bu san)', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '2020-07-25T19:46:23Z');
insert into item (title, description, "creatorId", "createdAt") values ('Super 8 Stories', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2020-12-09T17:06:34Z');
insert into item (title, description, "creatorId", "createdAt") values ('Man''s Favorite Sport?', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2020-07-22T22:26:42Z');
insert into item (title, description, "creatorId", "createdAt") values ('Crazy Stone (Fengkuang de shitou)', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2020-06-20T07:07:36Z');
insert into item (title, description, "creatorId", "createdAt") values ('Murder on the Orient Express', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2020-03-04T22:48:32Z');
insert into item (title, description, "creatorId", "createdAt") values ('Love Parade, The', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2020-10-01T14:18:50Z');
insert into item (title, description, "creatorId", "createdAt") values ('Swamp, The (Ciénaga, La)', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-11-03T03:49:45Z');
insert into item (title, description, "creatorId", "createdAt") values ('Great King, The (Der große König)', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-04-06T03:32:05Z');
insert into item (title, description, "creatorId", "createdAt") values ('Winter Soldier', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2020-09-26T09:15:07Z');
insert into item (title, description, "creatorId", "createdAt") values ('The Missing Piece: Mona Lisa, Her Thief, the True Story', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-03-24T01:16:56Z');
insert into item (title, description, "creatorId", "createdAt") values ('Tale of Zatoichi, The (Zatôichi monogatari) (Zatôichi 1)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1, '2020-08-15T14:54:23Z');
insert into item (title, description, "creatorId", "createdAt") values ('JLG/JLG (JLG/JLG - autoportrait de décembre)', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-11-30T20:01:00Z');
insert into item (title, description, "creatorId", "createdAt") values ('Incredible Hulk, The', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-04-30T12:52:12Z');
insert into item (title, description, "creatorId", "createdAt") values ('Climb, The', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-05-08T05:06:16Z');
insert into item (title, description, "creatorId", "createdAt") values ('The Inhabited Island 2: Rebellion', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2020-10-24T13:22:38Z');
insert into item (title, description, "creatorId", "createdAt") values ('Window to Paris (Okno v Parizh)', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2020-09-20T05:11:07Z');
insert into item (title, description, "creatorId", "createdAt") values ('Mad Monster Party?', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2020-07-11T17:34:35Z');
insert into item (title, description, "creatorId", "createdAt") values ('Cinderella II: Dreams Come True', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-02-11T05:24:41Z');
insert into item (title, description, "creatorId", "createdAt") values ('Mummy''s Tomb, The', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-08-19T14:49:11Z');
insert into item (title, description, "creatorId", "createdAt") values ('Aks', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2020-02-01T14:45:03Z');
insert into item (title, description, "creatorId", "createdAt") values ('Play it to the Bone', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2020-06-15T08:20:41Z');
insert into item (title, description, "creatorId", "createdAt") values ('Judas Kiss', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-05-27T20:26:11Z');
insert into item (title, description, "creatorId", "createdAt") values ('Julie Johnson', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2020-08-19T17:40:02Z');
insert into item (title, description, "creatorId", "createdAt") values ('Sword of Doom, The (Dai-bosatsu tôge)', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2020-09-26T15:46:44Z');
insert into item (title, description, "creatorId", "createdAt") values ('Marseillaise, La', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2020-10-14T23:26:44Z');
insert into item (title, description, "creatorId", "createdAt") values ('Mike Birbiglia: What I Should Have Said Was Nothing', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2020-08-26T07:46:01Z');
insert into item (title, description, "creatorId", "createdAt") values ('Message from Akira Kurosawa: For Beautiful Movies, A (Kurosawa Akira kara no messêji: Utsukushii eiga o)', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2020-03-12T16:11:12Z');
insert into item (title, description, "creatorId", "createdAt") values ('Indochine', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2020-04-25T15:20:02Z');
insert into item (title, description, "creatorId", "createdAt") values ('Husk', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-11-25T16:07:14Z');
insert into item (title, description, "creatorId", "createdAt") values ('Mole People, The', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2020-12-23T13:31:28Z');
insert into item (title, description, "creatorId", "createdAt") values ('Lady Eve, The', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2020-06-16T22:14:10Z');
insert into item (title, description, "creatorId", "createdAt") values ('Electric Dragon 80.000 V', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2020-04-07T01:41:40Z');
insert into item (title, description, "creatorId", "createdAt") values ('Sabotage', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2020-02-29T23:02:35Z');
insert into item (title, description, "creatorId", "createdAt") values ('Bounty Hunter, The', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-08-09T08:56:32Z');
insert into item (title, description, "creatorId", "createdAt") values ('Five Corners', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2020-12-17T01:35:24Z');
insert into item (title, description, "creatorId", "createdAt") values ('Last Mountain, The', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-11-20T11:45:21Z');
insert into item (title, description, "creatorId", "createdAt") values ('The Remaining', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2020-05-12T08:05:22Z');
insert into item (title, description, "creatorId", "createdAt") values ('Strategic Air Command', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2020-09-19T04:39:38Z');
insert into item (title, description, "creatorId", "createdAt") values ('Deliver Us from Evil', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2020-09-09T06:51:11Z');
insert into item (title, description, "creatorId", "createdAt") values ('Marley & Me', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2020-08-01T19:31:54Z');
insert into item (title, description, "creatorId", "createdAt") values ('Gung Ho', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2020-10-04T05:59:39Z');
insert into item (title, description, "creatorId", "createdAt") values ('Cycling with Moliere (Alceste à bicyclette)', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2020-04-19T14:16:26Z');
insert into item (title, description, "creatorId", "createdAt") values ('Angel and the Badman', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2020-11-20T18:31:42Z');
insert into item (title, description, "creatorId", "createdAt") values ('It''s All True', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2020-12-30T16:32:26Z');
insert into item (title, description, "creatorId", "createdAt") values ('Decoy', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2020-09-16T07:18:31Z');
insert into item (title, description, "creatorId", "createdAt") values ('Walker', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2020-11-12T08:55:58Z');
insert into item (title, description, "creatorId", "createdAt") values ('Fatty Drives the Bus', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2020-06-18T20:01:00Z');
insert into item (title, description, "creatorId", "createdAt") values ('Distinguished Gentleman, The', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2020-10-13T20:50:23Z');
insert into item (title, description, "creatorId", "createdAt") values ('My Mother''s Smile (a.k.a. The Religion Hour) (L''ora di religione) (Il sorriso di mia madre)', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2020-03-09T01:33:04Z');
insert into item (title, description, "creatorId", "createdAt") values ('Two Weeks in Another Town', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2020-01-13T07:58:41Z');
insert into item (title, description, "creatorId", "createdAt") values ('Under Siege', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2020-05-03T22:51:04Z');
insert into item (title, description, "creatorId", "createdAt") values ('The Butterfly Effect 2', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2020-05-04T16:52:30Z');

        `);
        });
    }
    down(_) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.FakeItems1610142155771 = FakeItems1610142155771;
//# sourceMappingURL=1610142155771-FakeItems.js.map